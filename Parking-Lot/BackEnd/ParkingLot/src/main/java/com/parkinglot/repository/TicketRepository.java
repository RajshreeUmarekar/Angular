package com.parkinglot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.parkinglot.entity.Ticket;

@Repository
public interface TicketRepository extends JpaRepository<Ticket, Integer>{
	Ticket findByVehicleId(int vehicleId);
}