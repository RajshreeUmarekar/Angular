package com.parkinglot.entity;

import com.parkinglot.enums.ParkingSpotType;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name="typeOfParkingSpot")
public class TypeOfParkingSpot {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int typeOfParkingSpotId;
	
	private int maxCapacity;
	
	@Enumerated(EnumType.STRING)
	private ParkingSpotType parkingSpotType;

	public int getTypeOfParkingSpotId() {
		return typeOfParkingSpotId;
	}

	public void setTypeOfParkingSpotId(int typeOfParkingSpotId) {
		this.typeOfParkingSpotId = typeOfParkingSpotId;
	}

	public int getMaxCapacity() {
		return maxCapacity;
	}

	public void setMaxCapacity(int maxCapacity) {
		this.maxCapacity = maxCapacity;
	}

	public ParkingSpotType getParkingSpotType() {
		return parkingSpotType;
	}

	public void setParkingSpotType(ParkingSpotType parkingSpotType) {
		this.parkingSpotType = parkingSpotType;
	}

}
