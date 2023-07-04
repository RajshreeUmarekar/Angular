package com.parkinglot.service;

import com.parkinglot.entity.TypeOfParkingSpot;
import com.parkinglot.enums.ParkingSpotType;
import com.parkinglot.repository.ParkingSpotTypeRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ParkingSpotTypeService {
	
	@Autowired
	ParkingSpotTypeRepository parkingSpotTypeRepository;

	public TypeOfParkingSpot findByParkingSpotType(ParkingSpotType parkingSpotType) {
		return parkingSpotTypeRepository.findByParkingSpotType(parkingSpotType);
	}

}
