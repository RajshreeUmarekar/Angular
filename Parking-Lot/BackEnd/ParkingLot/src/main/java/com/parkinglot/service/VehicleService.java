package com.parkinglot.service;

import com.parkinglot.entity.Vehicle;
import com.parkinglot.enums.ParkingSpotType;
import com.parkinglot.enums.VehicleType;
import com.parkinglot.repository.VehicleRepository;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VehicleService {
	
	@Autowired
	VehicleRepository vehicleRepository;

	public Vehicle findByVehicleNumber(String vehicleNumber) {
		return vehicleRepository.findByVehicleNumber(vehicleNumber);
	}

	public Vehicle save(String vehicleNumber, VehicleType vehicleType) {
		
		Map<VehicleType, ParkingSpotType> vehicleToParkingSpotType = new HashMap<VehicleType, ParkingSpotType>(){{
			put(VehicleType.CAR, ParkingSpotType.COMPACT);
			put(VehicleType.TRUCK, ParkingSpotType.LARGE);
			put(VehicleType.VAN, ParkingSpotType.COMPACT);
			put(VehicleType.MOTORCYCLE, ParkingSpotType.MOTORCYCLE);
			put(VehicleType.HANDICAPPED, ParkingSpotType.HANDICAPPED);
			put(VehicleType.ELECTRIC, ParkingSpotType.ELECTRIC);
		}};
		
		Vehicle vehicle = new Vehicle();
		vehicle.setVehicleNumber(vehicleNumber);
		vehicle.setVehicleType(vehicleType);
		vehicle.setParkingSpotType(vehicleToParkingSpotType.get(vehicleType));
		
		return vehicleRepository.save(vehicle);
	}

}
