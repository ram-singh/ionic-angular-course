import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, of } from 'rxjs';
import { take, map, tap, delay, switchMap } from 'rxjs/operators';
import { Place } from './place.model';
import { AuthService } from '../auth/auth.service';
import { PlaceLocation } from './location.model';
interface PlaceData {
  availableFrom: string;
  availableTo: string;
  description: string;
  imageUrl: string;
  price: number;
  title: string;
  userId: string;
  location: PlaceLocation;
}

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places = new BehaviorSubject<Place[]>([
    // new Place(
    //   "p1",
    //   "Manhattan Mansion",
    //   "In the heart of New York City.",
    //   "https://upload.wikimedia.org/wikipedia/commons/9/9c/Lower_Manhattan_201710.jpg",
    //   149.99,
    //   new Date("2020-01-01"),
    //   new Date("2020-12-31"),
    //   "xyz"
    // ),
    // new Place(
    //   "p2",
    //   'L"Amour Toujours"',
    //   "A romantic place in Paris!",
    //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5VDPwz1Ba_ic8_Rhkremkxnj9x7MG3Hq8bkHvrKZ3YRkuVKEA&s",
    //   189.99,
    //   new Date("2020-01-01"),
    //   new Date("2020-12-31"),
    //   "abc"
    // ),
    // new Place(
    //   "p3",
    //   "The Foggy Palace",
    //   "Not your average city trip",
    //   "https://i1.trekearth.com/photos/138102/dsc_0681.jpg",
    //   99.99,
    //   new Date("2020-01-01"),
    //   new Date("2020-12-31"),
    //   "abc"
    // )
  ]);
  constructor(private authService: AuthService, private http: HttpClient) {}
  get places() {
    return this._places.asObservable();
  }
  getPlace(id: string) {
    return this.authService.token.pipe(
      take(1),
      switchMap(token => {
        return this.http
        .get<PlaceData>(
          `https://ionic-angular-course-b1b7f.firebaseio.com/offered-places/${id}.json?auth=${token}`
        );
      }),
      map(placeData => {
          return new Place(
            id,
            placeData.title,
            placeData.description,
            placeData.imageUrl,
            placeData.price,
            new Date(placeData.availableFrom),
            new Date(placeData.availableTo),
            placeData.userId,
            placeData.location
          );
        })
      );
  }
  fetchPlaces() {
    return this.authService.token.pipe(
      take(1),
      switchMap(token => {
        return this.http.get<{ [key: string]: PlaceData }>(
          `https://ionic-angular-course-b1b7f.firebaseio.com/offered-places.json?auth=${token}`
        );
      }),
      map(resData => {
        const places = [];
        for (const key in resData) {
          if (resData.hasOwnProperty(key)) {
            const data = resData[key];
            places.push(
              new Place(
                key,
                data.title,
                data.description,
                data.imageUrl,
                data.price,
                new Date(data.availableFrom),
                new Date(data.availableTo),
                data.userId,
                data.location
              )
            );
          }
        }
        return places;
      }),
      delay(1000),
      tap(places => this._places.next(places))
    );
  }
  uploadImage(image: File) {
    const uploadData = new FormData();
    uploadData.append('image', image);
    return this.authService.token.pipe(
      take(1),
      switchMap(token => {
        return this.http.post<{ imageUrl: string; imagePath: string }>(
          'https://us-central1-ionic-angular-course-b1b7f.cloudfunctions.net/storeImage',
          uploadData,
          { headers: {Authorization: 'Bearer ' + token}}
        );
      })
      );
  }
  addPlace(
    title: string,
    description: string,
    price: number,
    dateFrom: Date,
    dateTo: Date,
    location: PlaceLocation,
    imageUrl: string
  ) {
    let generatedId = '';
    let newPlace: Place;
    let fetchedUserId: string;
    return this.authService.userId.pipe(
      take(1),
      switchMap(userId => {
        fetchedUserId = userId;
        return this.authService.token;
      }),
      take(1),
      switchMap(token => {
        if (!fetchedUserId) {
          throw new Error('No user found!');
        }
        newPlace = new Place(
          Math.random().toString(),
          title,
          description,
          imageUrl,
          price,
          dateFrom,
          dateTo,
          fetchedUserId,
          location
        );
        return this.http.post<{ name: string }>(
          `https://ionic-angular-course-b1b7f.firebaseio.com/offered-places.json?auth=${token}`,
          { ...newPlace, id: null }
        );
      }),
      switchMap(resData => {
        generatedId = resData.name;
        return this.places;
      }),
      take(1),
      tap(places => {
        newPlace.id = generatedId;
        this._places.next(places.concat(newPlace));
      })
    );
    // return this.places.pipe(take(1), delay(1000), tap(places => this._places.next(places.concat(newPlace)) ));
  }
  updatePlace(placeId: string, title: string, description: string) {
    let updatedPlaces: Place[];
    let fetchedToken: string;
    return this.authService.token.pipe(
      take(1),
      switchMap(token => {
        fetchedToken = token;
        return this.places;
      }),
      take(1),
      switchMap(places => {
        if (!places || places.length === 0) {
          return this.fetchPlaces();
        } else {
          return of(places); // of --> returns observable for any value
        }
      }),
      switchMap(places => {
        const updatedPlaceIndex = places.findIndex(pl => pl.id === placeId);
        updatedPlaces = [...places];
        const oldPlace = updatedPlaces[updatedPlaceIndex];
        updatedPlaces[updatedPlaceIndex] = new Place(
          oldPlace.id,
          title,
          description,
          oldPlace.imageUrl,
          oldPlace.price,
          oldPlace.availableFrom,
          oldPlace.availableTo,
          oldPlace.userId,
          oldPlace.location
        );
        return this.http.put(
          `https://ionic-angular-course-b1b7f.firebaseio.com/offered-places/${placeId}.json?auth=${fetchedToken}`,
          { ...updatedPlaces[updatedPlaceIndex], id: null }
        );
      }),
      tap(() => {
        return this._places.next(updatedPlaces);
      })
    );
  }
}
