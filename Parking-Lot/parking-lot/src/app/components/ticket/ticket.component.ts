import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingDetails } from 'src/app/model/booking-detail.model';
import { TicketDetails } from 'src/app/model/ticket-detail.model';
import { PaymentService } from 'src/app/services/payment/payment.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit{

  bookingDetails!: BookingDetails;
  ticketDetails!: TicketDetails;

  constructor(
    private router: Router,
    private paymentService: PaymentService
  ) {}

  ngOnInit() {
    this.ticketDetails = history.state.ticketDetails;
    this.bookingDetails = history.state.bookingDetails;
  }

  onSubmit(): void {
    this.paymentService.getAmountDetails(this.ticketDetails).subscribe(
      (response:any) => {
        if(response != null) {
          this.router.navigateByUrl('/payment', {state: {
            bookingDetails: this.bookingDetails,
            amountDetails: response,
            ticketDetails: this.ticketDetails
          }})
        }
      }
    );
  }
}
