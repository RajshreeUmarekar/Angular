package com.parkinglot.service;

import com.parkinglot.entity.ParkingSpot;
import com.parkinglot.repository.ParkingSpotRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ParkingSpotService {
	
	@Autowired
	ParkingSpotRepository parkingSpotRepository;

	public ParkingSpot findByParkingSpotTypeIdAndFloorNumber(int parkingSpotTypeId, int floorNumber) {
		return parkingSpotRepository.findByParkingSpotTypeIdAndFloorNumber(parkingSpotTypeId, floorNumber);
	}

}
