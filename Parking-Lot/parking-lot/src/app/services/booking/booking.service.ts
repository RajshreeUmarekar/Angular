import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Urls } from 'src/app/constants/urls';
import { AvailabilityDetails } from 'src/app/model/availability-detail.model';
import { BookingDetails } from 'src/app/model/booking-detail.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) {
  }

  public getBookingAvailability(bookingDetails: BookingDetails): Observable<AvailabilityDetails> {
    return this.http.post<AvailabilityDetails>(Urls.bookingApiUrl, bookingDetails);
  }
}
