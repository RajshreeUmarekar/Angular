package com.parkinglot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.parkinglot.entity.Floor;
import com.parkinglot.models.FloorId;
import com.parkinglot.repository.FloorRepository;

@Service
public class FloorService {

	@Autowired
	FloorRepository floorRepository;
	
	public Floor findByFloorId(FloorId floorId) {
		return floorRepository.findById(floorId).get();
	}

	public List<Floor> findAll() {
		return floorRepository.findAll();
	}

}
