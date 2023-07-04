package com.parkinglot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.parkinglot.entity.TypeOfParkingSpot;
import com.parkinglot.enums.ParkingSpotType;

@Repository
public interface ParkingSpotTypeRepository extends JpaRepository<TypeOfParkingSpot, Integer>{
	TypeOfParkingSpot findByParkingSpotType(ParkingSpotType parkingSpotType);
}