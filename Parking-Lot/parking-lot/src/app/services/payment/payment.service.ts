import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Urls } from 'src/app/constants/urls';
import { PaymentDetails } from 'src/app/model/payment-detail.model';
import { PaymentStatusDetails } from 'src/app/model/payment-status-detail.model';
import { TicketDetails } from 'src/app/model/ticket-detail.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private paymentStatusUrl!: string;
  
  constructor(private http: HttpClient) {
  }

  public getAmountDetails(ticketDetails: TicketDetails): Observable<string> {
    return this.http.post<string>(Urls.paymentApiUrl, ticketDetails);
  }

  public getPaymentStatus(paymentDetails: PaymentDetails, ticketDetails: TicketDetails): Observable<PaymentStatusDetails> {
    this.paymentStatusUrl = Urls.paymentStatusApiUrl + ticketDetails.ticketId;
    return this.http.post<PaymentStatusDetails>(this.paymentStatusUrl, paymentDetails);
  }
}
