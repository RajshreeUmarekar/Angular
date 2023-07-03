import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AvailabilityDetails } from 'src/app/model/availability-detail.model';
import { VehicleType } from 'src/app/model/enum/vehicle-types.model';
import { BookingService } from 'src/app/services/booking/booking.service';
import { FloorService } from 'src/app/services/floor/floor.service';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';

@Component({
  selector: 'app-slot-availability',
  templateUrl: './slot-availability.component.html',
  styleUrls: ['./slot-availability.component.css']
})
export class SlotAvailabilityComponent implements OnInit {

  entryForm = this.formBuilder.group({
    entryGateNumber: [0, Validators.required],
    entryTime: ['', Validators.required],
    vehicleNumber: ['', Validators.required],
    vehicleType: ['', Validators.required]
  });

  availability = false;
  currentDate:Date = new Date();

  vehicleTypes = [
    {name:"Car", value: VehicleType.CAR},
    {name:"Truck", value: VehicleType.TRUCK},
    {name:"Van", value: VehicleType.CAR},
    {name:"Motorcycle", value: VehicleType.MOTORCYCLE},
    {name:"Handicapped", value: VehicleType.HANDICAPPED},
    {name:"Electric", value: VehicleType.ELECTRIC},
  ];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private bookingService: BookingService,
    private floorService: FloorService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.floorService.getParkingAvailability().subscribe(
      (response:any) => {
        this.availability = response;
      }
    );
  }

  onSubmit(): void {
    if(this.entryForm.controls['entryGateNumber'].errors === null && 
        this.entryForm.controls['entryTime'].errors === null &&
        this.entryForm.controls['vehicleType'].errors === null &&
        this.entryForm.controls['vehicleNumber'].errors === null) {
          this.bookingService.getBookingAvailability(this.entryForm.value).subscribe(
            (response: AvailabilityDetails) => {
              if(response == null) {
                this.dialog.open(AlertDialogComponent, {
                  data: {
                    header: 'Failure',
                    message: 'No Slot available for given details!!'
                  }
                })
              } else {
                this.router.navigateByUrl('/booking', {state: {
                  availabilityDetails: response,
                  bookingDetails: this.entryForm.value
                }})
              }
            }
          );
        }
  }
}
