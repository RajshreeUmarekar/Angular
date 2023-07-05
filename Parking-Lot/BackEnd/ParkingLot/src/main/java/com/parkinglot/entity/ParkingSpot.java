package com.parkinglot.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name="parkingSpot")
public class ParkingSpot {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int parkingSpotId;
	
	private int parkingSpotTypeId;
	private int floorNumber;
	private boolean isOccupied;
	private boolean isChargable;
	
	public int getParkingSpotId() {
		return parkingSpotId;
	}
	public void setParkingSpotId(int parkingSpotId) {
		this.parkingSpotId = parkingSpotId;
	}
	public int getParkingSpotTypeId() {
		return parkingSpotTypeId;
	}
	public void setParkingSpotTypeId(int parkingSpotTypeId) {
		this.parkingSpotTypeId = parkingSpotTypeId;
	}
	public int getFloorNumber() {
		return floorNumber;
	}
	public void setFloorNumber(int floorNumber) {
		this.floorNumber = floorNumber;
	}
	public boolean isOccupied() {
		return isOccupied;
	}
	public void setOccupied(boolean isOccupied) {
		this.isOccupied = isOccupied;
	}
	public boolean isChargable() {
		return isChargable;
	}
	public void setChargable(boolean isChargable) {
		this.isChargable = isChargable;
	}
	
	

}
