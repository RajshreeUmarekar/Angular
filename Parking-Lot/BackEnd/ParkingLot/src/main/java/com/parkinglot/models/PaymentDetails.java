package com.parkinglot.models;

import java.time.LocalDateTime;

import com.parkinglot.enums.PaymentMode;

public class PaymentDetails {
	private LocalDateTime entryTime;
	private LocalDateTime exitTime;
	private String amount;
	private PaymentMode paymentMode;
	
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
	public String getAmount() {
		return amount;
	}
	public void setAmount(String amount) {
		this.amount = amount;
	}
	public PaymentMode getPaymentMode() {
		return paymentMode;
	}
	public void setPaymentMode(PaymentMode paymentMode) {
		this.paymentMode = paymentMode;
	}

	

}
