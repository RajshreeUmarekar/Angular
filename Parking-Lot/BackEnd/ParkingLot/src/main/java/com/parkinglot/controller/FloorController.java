package com.parkinglot.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.parkinglot.entity.Floor;
import com.parkinglot.service.FloorService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class FloorController {
	
	@Autowired
	FloorService floorService;
	
	@GetMapping("/slot-availability")
	public boolean getAvailability() {
		List<Floor> floorList = floorService.findAll();
		List<Floor> availableSlotList = floorList.stream().filter(floor -> floor.getAvailableNumberOfParkingSpots() > 0).collect(Collectors.toList());
		if(availableSlotList.size() > 0) {
			return true;
		}else {
			return false;
		}
	}

}
