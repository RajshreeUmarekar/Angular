package com.parkinglot.entity;

import com.parkinglot.enums.ParkingSpotType;
import com.parkinglot.enums.VehicleType;

import jakarta.persistence.Column;
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
@Table(name="vehicle")
public class Vehicle {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(unique=true)
	private String vehicleNumber;
	
	@Enumerated(EnumType.STRING)
	private VehicleType vehicleType;
	
	@Enumerated(EnumType.STRING)
	private ParkingSpotType parkingSpotType;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getVehicleNumber() {
		return vehicleNumber;
	}

	public void setVehicleNumber(String vehicleNumber) {
		this.vehicleNumber = vehicleNumber;
	}

	public VehicleType getVehicleType() {
		return vehicleType;
	}

	public void setVehicleType(VehicleType vehicleType) {
		this.vehicleType = vehicleType;
	}

	public ParkingSpotType getParkingSpotType() {
		return parkingSpotType;
	}

	public void setParkingSpotType(ParkingSpotType parkingSpotType) {
		this.parkingSpotType = parkingSpotType;
	}
	
	

}
