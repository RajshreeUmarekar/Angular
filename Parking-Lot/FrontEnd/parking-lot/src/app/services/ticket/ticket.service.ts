import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Urls } from 'src/app/constants/urls';
import { AvailabilityDetails } from 'src/app/model/availability-detail.model';
import { BookingDetails } from 'src/app/model/booking-detail.model';
import { TicketDetails } from 'src/app/model/ticket-detail.model';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient) {
  }

  public getTicketDetails(bookingDetails: BookingDetails, availabilityDetails: AvailabilityDetails): Observable<TicketDetails> {
    return this.http.post<TicketDetails>(Urls.ticketApiUrl + availabilityDetails.parkingSpotId, bookingDetails);
  }
}
