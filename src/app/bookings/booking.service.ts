import { Injectable } from '@angular/core';
import { Booking } from './booking.model';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { take, delay, tap, map, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

interface BookingData {
  bookedFrom: string;
  bookedTo: string;
  firstName: string;
  lastName: string;
  guestNumber: number;
  placeId: string;
  placeImage: string;
  placeTitle: string;
  userId: string;
}
@Injectable({ providedIn: 'root' })
export class BookingService {
  private _bookings = new BehaviorSubject<Booking[]>([]);
  constructor(private authService: AuthService, private http: HttpClient) {}
  get bookings() {
    return this._bookings.asObservable();
  }
  getBooking(id: string) {
    return this.bookings.pipe(
      take(1),
      map(bookings => {
        return { ...bookings.find(b => b.id === id) };
      })
    );
  }

  fetchBookings() {
    return this.authService.userId.pipe(
        take(1),
        switchMap(userId => {
          return this.http
          .get<{ [key: string]: BookingData }>(
            `https://ionic-angular-course-b1b7f.firebaseio.com/bookings.json?orderBy="userId"&equalTo="${userId}"`
          );
        }),
        map(bookingData => {
          const bookings = [];
          for (const key in bookingData) {
            if (bookingData.hasOwnProperty(key)) {
              const data = bookingData[key];
              bookings.push(
                new Booking(
                  key,
                  data.placeId,
                  data.userId,
                  data.placeTitle,
                  data.placeImage,
                  data.firstName,
                  data.lastName,
                  data.guestNumber,
                  new Date(data.bookedFrom),
                  new Date(data.bookedTo)
                )
              );
            }
          }
          return bookings;
        }),
        tap(bookings => {
          console.log('bookings: ', bookings);
          this._bookings.next(bookings);
        })
    );
  }

  addBooking(
    placeId: string,
    placeTitle: string,
    placeImage: string,
    firstName: string,
    lastName: string,
    guestNumber: number,
    dateFrom: Date,
    dateTo: Date
  ) {
    let generatedId: string;
    let newBooking: Booking;
    return this.authService.userId.pipe(
      take(1),
      switchMap(userId => {
        if (!userId) {
          throw new Error('No user id found!');
        }
        newBooking =  new Booking(
        Math.random().toString(),
        placeId,
        userId,
        placeTitle,
        placeImage,
        firstName,
        lastName,
        guestNumber,
        dateFrom,
        dateTo
      );
        return this.http
      .post<{ name: string }>(
        'https://ionic-angular-course-b1b7f.firebaseio.com/bookings.json',
        { ...newBooking, id: null }
      );
    }),
    switchMap(resData => {
          generatedId = resData.name;
          return this.bookings;
    }),
    take(1),
    tap(bookings => {
      newBooking.id = generatedId;
      this._bookings.next(bookings.concat(newBooking));
    })
    );
  }

  cancelBooking(bookingId: string) {
    return this.http.delete(`https://ionic-angular-course-b1b7f.firebaseio.com/bookings/${bookingId}.json`)
    .pipe(
      switchMap(() => {
        return this.bookings;
      }),
      take(1),
      tap(bookings => {
        this._bookings.next(bookings.filter(b => b.id !== bookingId));
      })
    );
  }
}
