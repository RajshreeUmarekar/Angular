import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AvailabilityDetails } from 'src/app/model/availability-detail.model';
import { BookingDetails } from 'src/app/model/booking-detail.model';
import { TicketService } from 'src/app/services/ticket/ticket.service';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit{

  availabilityDetails!: AvailabilityDetails;
  bookingDetails!: BookingDetails;

  constructor(
    private router: Router,
    private ticketService: TicketService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.availabilityDetails = history.state.availabilityDetails;
    this.bookingDetails = history.state.bookingDetails;
  }

  onSubmit(): void {
    this.ticketService.getTicketDetails(this.bookingDetails, this.availabilityDetails).subscribe(
      response => {
        if(response != null && response.ticketId != 0) {
          this.router.navigateByUrl('/ticket', { state: {
              ticketDetails: response,
              bookingDetails: this.bookingDetails
            }
          });
        } else {
          this.dialog.open(AlertDialogComponent, {
            data : {
              header: 'Failure',
              message: 'Ticket is already generated for given vehicle number!'
            }
          });
          this.router.navigateByUrl('/slot-availability');
        }
      }
    );
  }
}
