package com.parkinglot.models;

import com.parkinglot.enums.VehicleType;

public class BookingDetails {
	private int entryGateNumber;
	private String entryTime;
	private String vehicleNumber;
	private VehicleType vehicleType;
	
	public int getEntryGateNumber() {
		return entryGateNumber;
	}
	public void setEntryGateNumber(int entryGateNumber) {
		this.entryGateNumber = entryGateNumber;
	}
	public String getEntryTime() {
		return entryTime;
	}
	public void setEntryTime(String entryTime) {
		this.entryTime = entryTime;
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

	

}
