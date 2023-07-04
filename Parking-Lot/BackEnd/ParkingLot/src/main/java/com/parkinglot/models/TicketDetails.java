package com.parkinglot.models;

import java.time.LocalDateTime;

import com.parkinglot.enums.VehicleType;

public class TicketDetails {
	
	private int ticketId;
	private int entryGateNumber;
	private LocalDateTime entryTime;
	private LocalDateTime exitTime;
	private String vehicleNumber;
	private VehicleType vehicleType;
	
	public int getTicketId() {
		return ticketId;
	}
	public void setTicketId(int ticketId) {
		this.ticketId = ticketId;
	}
	public int getEntryGateNumber() {
		return entryGateNumber;
	}
	public void setEntryGateNumber(int entryGateNumber) {
		this.entryGateNumber = entryGateNumber;
	}
	public LocalDateTime getEntryTime() {
		return entryTime;
	}
	public void setEntryTime(LocalDateTime entryTime) {
		this.entryTime = entryTime;
	}
	public LocalDateTime getExitTime() {
		return exitTime;
	}
	public void setExitTime(LocalDateTime exitTime) {
		this.exitTime = exitTime;
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
