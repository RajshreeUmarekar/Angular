package com.parkinglot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.parkinglot.entity.Gate;

@Repository
public interface GateRepository extends JpaRepository<Gate, Integer>{

}
