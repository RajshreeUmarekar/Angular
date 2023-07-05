package com.parkinglot.entity;

import com.parkinglot.models.FloorId;

import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name="floor")
public class Floor {
	
	@EmbeddedId
	private FloorId floorId;
	
	private int totalNumberOfParkingSpotsOfEachType;
	private int availableNumberOfParkingSpots;
	
	public FloorId getFloorId() {
		return floorId;
	}
	public void setFloorId(FloorId floorId) {
		this.floorId = floorId;
	}
	public int getTotalNumberOfParkingSpotsOfEachType() {
		return totalNumberOfParkingSpotsOfEachType;
	}
	public void setTotalNumberOfParkingSpotsOfEachType(int totalNumberOfParkingSpotsOfEachType) {
		this.totalNumberOfParkingSpotsOfEachType = totalNumberOfParkingSpotsOfEachType;
	}
	public int getAvailableNumberOfParkingSpots() {
		return availableNumberOfParkingSpots;
	}
	public void setAvailableNumberOfParkingSpots(int availableNumberOfParkingSpots) {
		this.availableNumberOfParkingSpots = availableNumberOfParkingSpots;
	}
	
	


}
