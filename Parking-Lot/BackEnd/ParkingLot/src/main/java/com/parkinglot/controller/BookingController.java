package com.parkinglot.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.parkinglot.service.*;
import com.parkinglot.entity.*;
import com.parkinglot.models.BookingDetails;
import com.parkinglot.models.FloorId;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class BookingController {
	
	private static final Logger LOGGER = LoggerFactory.getLogger(BookingController.class);
	
	@Autowired
	GateService gateService;
	
	@Autowired
	VehicleService vehicleService;
	
	@Autowired
	ParkingSpotTypeService parkingSpotTypeService;
	
	@Autowired
	FloorService floorService;
	
	@Autowired
	ParkingSpotService parkingSpotService;
	
	@PostMapping("/booking")
	public ResponseEntity<ParkingSpot> getBookingAvailability(@RequestBody BookingDetails bookingDetails) {
		ParkingSpot parkingSpotDetails = new ParkingSpot();
		
		try {
			if(vehicleService.findByVehicleNumber(bookingDetails.getVehicleNumber()) == null) {
				Vehicle vehicle = vehicleService.save(bookingDetails.getVehicleNumber(), bookingDetails.getVehicleType());
				
				if(vehicle != null) {
					
					Gate gateDetails = gateService.findById(bookingDetails.getEntryGateNumber());
					TypeOfParkingSpot parkingSpotTypeDetails = parkingSpotTypeService.findByParkingSpotType(vehicle.getParkingSpotType());
					Floor floorDetails = floorService.findByFloorId(new FloorId(gateDetails.getFloorNumber(), parkingSpotTypeDetails.getTypeOfParkingSpotId()));
					
					if(floorDetails.getAvailableNumberOfParkingSpots() > 0) {
						parkingSpotDetails = parkingSpotService.findByParkingSpotTypeIdAndFloorNumber(parkingSpotTypeDetails.getTypeOfParkingSpotId(), gateDetails.getFloorNumber());
						if(parkingSpotDetails != null && !parkingSpotDetails.isOccupied()) {
							return new ResponseEntity<ParkingSpot>(parkingSpotDetails, HttpStatus.OK);
						}
					}
				}
			}else {
				LOGGER.error("Vehicle already exist!!");
			}
		}catch(Exception exception) {
			LOGGER.error("Exception occurred {}", exception);
		}
		return new ResponseEntity<ParkingSpot>(parkingSpotDetails, HttpStatus.OK);
	}

}
