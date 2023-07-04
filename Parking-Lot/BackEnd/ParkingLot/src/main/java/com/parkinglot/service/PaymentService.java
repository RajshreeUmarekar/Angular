package com.parkinglot.service;

import com.parkinglot.entity.Payment;
import com.parkinglot.repository.PaymentRepository;

import java.time.Duration;
import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PaymentService {
	
	@Autowired
	PaymentRepository paymentRepository;
	
	public String calculateAmount(LocalDateTime entryTime, LocalDateTime exitTime) {
		Duration duration = Duration.between(entryTime, LocalDateTime.now());
		double hours = duration.toHours() + ((double)duration.toMinutes()/60);
		double amount = 0;
		
		if(hours>=3) {
			amount = (4*1) + (3.5*2) + (2.5*(hours-3));
		}else if(hours>=1 && hours<=3) {
			amount= (4*1) + (3.5*(hours-1));
		}else if(hours<1 && hours>=0) {
			amount = (4*hours);
		}
		
		return String.valueOf(amount);
	}

	public Payment save(Payment payment) {
		return paymentRepository.save(payment);
	}

}
