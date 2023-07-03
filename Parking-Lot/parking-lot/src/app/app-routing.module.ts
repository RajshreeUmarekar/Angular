import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './components/booking/booking.component';
import { PaymentComponent } from './components/payment/payment.component';
import { SlotAvailabilityComponent } from './components/slot-availability/slot-availability.component';
import { TicketComponent } from './components/ticket/ticket.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'slot-availability',
    pathMatch: 'full'
  },
  {
    path: 'slot-availability',
    component: SlotAvailabilityComponent
  },
  {
    path: 'booking',
    component: BookingComponent
  },
  {
    path: 'ticket',
    component: TicketComponent
  },
  {
    path: 'payment',
    component: PaymentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
