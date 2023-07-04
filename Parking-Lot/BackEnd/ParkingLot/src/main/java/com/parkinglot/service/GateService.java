package com.parkinglot.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.parkinglot.entity.Gate;
import com.parkinglot.repository.GateRepository;

@Service
public class GateService {
	
	@Autowired
	GateRepository gateRepository;

	public Gate findById(int id) {
		return gateRepository.findById(id).get();
	}

}
