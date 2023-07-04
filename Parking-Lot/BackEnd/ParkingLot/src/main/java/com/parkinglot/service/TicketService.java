package com.parkinglot.service;

import com.parkinglot.entity.Ticket;
import com.parkinglot.repository.TicketRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TicketService {
	
	@Autowired
	TicketRepository ticketRepository;

	public Ticket findByVehicleId(int vehicleId) {
		return ticketRepository.findByVehicleId(vehicleId);
	}

	public Ticket save(Ticket ticket) {
		return ticketRepository.save(ticket);
	}

}
