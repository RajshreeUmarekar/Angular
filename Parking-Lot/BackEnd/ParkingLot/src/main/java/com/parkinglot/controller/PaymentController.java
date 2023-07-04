package com.parkinglot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.parkinglot.entity.Payment;
import com.parkinglot.enums.PaymentMode;
import com.parkinglot.enums.Status;
import com.parkinglot.models.PaymentDetails;
import com.parkinglot.models.TicketDetails;
import com.parkinglot.service.PaymentService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class PaymentController {
	
	@Autowired
	PaymentService paymentService;
	
	@PostMapping("/payment")
	public ResponseEntity<String> getAmountDetails(@RequestBody TicketDetails ticketDetails) {
		String calculatedAmount = paymentService.calculateAmount(ticketDetails.getEntryTime(), ticketDetails.getExitTime());
		return new ResponseEntity<String>(calculatedAmount, HttpStatus.OK);
	}
	
	@PostMapping("/payment/status")
	public ResponseEntity<Payment> getAmountDetails(@RequestBody PaymentDetails paymentDetails, @RequestParam(value = "ticketId") int ticketId){
		Payment payment = new Payment();
		payment.setPaymentMode(paymentDetails.getPaymentMode());
		payment.setTicketId(ticketId);
		
		if(paymentDetails.getPaymentMode().equals(PaymentMode.CARD)) {
			payment.setPaymentStatus(Status.SUCCESS);
		}
		else if(paymentDetails.getPaymentMode().equals(PaymentMode.CASH)) {
			payment.setPaymentStatus(Status.FAIL);
		}
		paymentService.save(payment);
		
		return new ResponseEntity<Payment>(payment, HttpStatus.OK);
	}
	
	

}
