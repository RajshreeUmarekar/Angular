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
	private int floornumber;
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
	public int getFloornumber() {
		return floornumber;
	}
	public void setFloornumber(int floornumber) {
		this.floornumber = floornumber;
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
