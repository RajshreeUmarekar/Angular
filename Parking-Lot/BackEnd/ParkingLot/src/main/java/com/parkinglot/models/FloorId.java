package com.parkinglot.models;

import java.io.Serializable;

import jakarta.persistence.Embeddable;

@Embeddable
public class FloorId implements Serializable{
	
	private int floorNumber;
	private int typeOfParkingSpotId;
	
	public FloorId() {
	}
	public FloorId(int floorNumber, int typeOfParkingSpotId) {
		this.floorNumber = floorNumber;
		this.typeOfParkingSpotId = typeOfParkingSpotId;
	}
	
	
	public int getFloorNumber() {
		return floorNumber;
	}
	public void setFloorNumber(int floorNumber) {
		this.floorNumber = floorNumber;
	}
	public int getTypeOfParkingSpotId() {
		return typeOfParkingSpotId;
	}
	public void setTypeOfParkingSpotId(int typeOfParkingSpotId) {
		this.typeOfParkingSpotId = typeOfParkingSpotId;
	}
	

}
