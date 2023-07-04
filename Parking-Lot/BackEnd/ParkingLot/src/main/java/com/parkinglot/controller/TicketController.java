package com.parkinglot.controller;

import java.time.LocalDateTime;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.parkinglot.entity.Ticket;
import com.parkinglot.entity.Vehicle;
import com.parkinglot.models.BookingDetails;
import com.parkinglot.models.TicketDetails;
import com.parkinglot.service.TicketService;
import com.parkinglot.service.VehicleService;


@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class TicketController {
	
	private static final Logger LOGGER = LoggerFactory.getLogger(TicketController.class);
	
	@Autowired
	TicketService ticketService;
	
	@Autowired
	VehicleService vehicleService;
	
	@PostMapping("/ticket")
	public ResponseEntity<TicketDetails> getTicketDetails(@RequestBody BookingDetails bookingDetails, @RequestParam(value = "parkingSpotId") int parkingSpotId) {
		
		Ticket generatedTicket = generateTicket(bookingDetails, parkingSpotId);
		
		TicketDetails ticketDetails = new TicketDetails();
		ticketDetails.setTicketId(generatedTicket.getTicketId());
		ticketDetails.setEntryGateNumber(bookingDetails.getEntryGateNumber());
		ticketDetails.setEntryTime(generatedTicket.getEntryTime());
		ticketDetails.setExitTime(generatedTicket.getExitTime());
		ticketDetails.setVehicleNumber(bookingDetails.getVehicleNumber());
		ticketDetails.setVehicleType(bookingDetails.getVehicleType());
		return new ResponseEntity<TicketDetails>(ticketDetails, HttpStatus.OK);
		
	}

	private Ticket generateTicket(BookingDetails bookingDetails, int parkingSpotId) {
		Vehicle vehicle = vehicleService.findByVehicleNumber(bookingDetails.getEntryTime());
		
		if(ticketService.findByVehicleId(vehicle.getId()) == null) {
			Ticket ticket = new Ticket();
			ticket.setVehicleId(vehicle.getId());
			ticket.setAmount(0);
			ticket.setEntryTime(LocalDateTime.parse(bookingDetails.getEntryTime()));
			ticket.setParkingSpotId(parkingSpotId);
			
			return ticketService.save(ticket);
			
		}else {
			LOGGER.error("Ticket already exist!!");
			return new Ticket();
		}
	}
	
	

}
