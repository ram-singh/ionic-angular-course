import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from './user.model';
import { map, tap } from 'rxjs/operators';
import { Plugins } from '@capacitor/core';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  localId: string;
  expiresIn: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy {
  private pUser = new BehaviorSubject<User>(null);
 private activeLogoutTimer: any;
  get userIsAuthenticated() {
    return this.pUser.asObservable().pipe(
      map(user => user ? !!user.token : false ));
  }

  get userId() {
    return this.pUser.asObservable().pipe(map(user => user ? user.id : null));
  }
  get token() {
    return this.pUser.asObservable().pipe(map(user => user ? user.token : null));
  }

  constructor(private http: HttpClient) { }

  autoLogin() {
    // from --> convert Promise to Observable
    return from(Plugins.Storage.get({key: 'authData'})).pipe(
      map(storedData => {
        if ( !storedData || !storedData.value) {
          return null;
        }
        const parsedData = JSON.parse(storedData.value) as { userId: string, token: string, tokenExpirationDate: string, email: string};
        const expirationTime = new Date(parsedData.tokenExpirationDate);
        if (expirationTime <= new Date()) {
          return null;
        }
        const user = new User(parsedData.userId, parsedData.email, parsedData.token, expirationTime);
        return user;
      }),
      tap(user => {
        if (user) {
          this.pUser.next(user);
          this.autoLogout( user.tokenDuration);
        }
      }),
      map( user => {
        return !!user;
      })
    );
  }
  signup(email: string, password: string) {
    const firbaseAuthUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebaseWebAPIKey}`;
    return this.http.post<AuthResponseData>(firbaseAuthUrl, {
      email,
      password,
      returnSecureToken: true
    }).pipe( tap(this.setUserData.bind(this)));
  }

  login(email: string, password: string) {
    const signInUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebaseWebAPIKey}`;
    return this.http.post<AuthResponseData>(signInUrl, {
      email,
      password,
      returnSecureToken: true
    }).pipe( tap(this.setUserData.bind(this)));
  }

  logout() {
    if (this.activeLogoutTimer) {
      clearTimeout(this.activeLogoutTimer);
    }
    this.pUser.next(null);
    Plugins.Storage.remove({key: 'authData'});
  }

  private autoLogout(duration: number) {
    if (this.activeLogoutTimer) {
      clearTimeout(this.activeLogoutTimer);
    }
    this.activeLogoutTimer = setTimeout(() => {
      this.logout();
    }, duration);
  }
  private setUserData(userData: AuthResponseData) {
    const expirationTime = new Date(new Date().getTime() + (+userData.expiresIn * 1000));
    const user = new User(userData.localId, userData.email, userData.idToken, expirationTime);
    this.pUser.next(user);
    this.autoLogout(user.tokenDuration);
    this.storeAuthData(userData.localId, userData.idToken, expirationTime.toISOString(), userData.email);
  }

  private storeAuthData(userId: string, token: string, tokenExpirationDate: string, email: string) {
    const data = JSON.stringify({userId, token, tokenExpirationDate, email});
    Plugins.Storage.set({key: 'authData', value: data});
  }

  ngOnDestroy() {
    if (this.activeLogoutTimer) {
      clearTimeout(this.activeLogoutTimer);
    }
  }
}
