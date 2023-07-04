package com.parkinglot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.parkinglot.entity.ParkingSpot;


@Repository
public interface ParkingSpotRepository extends JpaRepository<ParkingSpot, Integer>{
	ParkingSpot findByParkingSpotTypeIdAndFloorNumber(int parkingSpotTypeId, int floorNumber);
}