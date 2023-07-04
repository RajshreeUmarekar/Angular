package com.parkinglot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.parkinglot.entity.Floor;
import com.parkinglot.models.FloorId;

@Repository
public interface FloorRepository extends JpaRepository<Floor, FloorId>{

}
