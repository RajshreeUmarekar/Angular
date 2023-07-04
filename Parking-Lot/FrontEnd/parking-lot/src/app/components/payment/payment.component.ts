import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BookingDetails } from 'src/app/model/booking-detail.model';
import { PaymentModeType } from 'src/app/model/enum/payment-mode-types.model';
import { PaymentStatusDetails } from 'src/app/model/payment-status-detail.model';
import { TicketDetails } from 'src/app/model/ticket-detail.model';
import { PaymentService } from 'src/app/services/payment/payment.service';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit{

  bookingDetails!: BookingDetails;
  ticketDetails!: TicketDetails;
  amountDetails!: number;

  paymentForm = this.formBuilder.group({
    entryTime: '',
    exitTime: '',
    amount: 0,
    paymentMode: ''
  });

  PaymentModes = [
    {name: "Cash", value: PaymentModeType.CASH},
    {name: "Card", value: PaymentModeType.CARD},
  ]

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private dialog: MatDialog,
    private paymentService: PaymentService
  ) {}

  ngOnInit() {
    this.bookingDetails = history.state.bookingDetails;
    this.ticketDetails = history.state.ticketDetails;
    this.amountDetails = history.state.amountDetails;

    this.setFormValue();
  }

  setFormValue() {
    this.paymentForm.controls['entryTime'].setValue(this.bookingDetails.entryTime!);
    this.paymentForm.controls['exitTime'].setValue(formatDate(new Date(), 'yyyy-MM-ddTHH:mm', 'en-US'));
    this.paymentForm.controls['amount'].setValue(this.amountDetails);
  }

  onSubmit(): void {
    if(this.amountDetails == 0) {
      this.router.navigateByUrl('/slot-availability');
    }else {
      this.paymentService.getPaymentStatus(this.paymentForm.value, this.ticketDetails).subscribe(
        (response:PaymentStatusDetails) => {
          if(response.paymentStatus === "SUCCESS") {
            this.dialog.open(AlertDialogComponent, {
              data : {
                header: 'Success',
                message: 'Your payment is completed successfully!'
              }
            })
          } else if(response.paymentStatus === "FAIL") {
            this.dialog.open(AlertDialogComponent, {
              data : {
                header: 'Failure',
                message: 'Your transaction is failed!'
              }
            })
          }
          this.router.navigateByUrl('/slot-availability');
        }
      );
    }
  }
}
