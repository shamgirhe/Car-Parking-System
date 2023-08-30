package com.app.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.ParkingSlots;

public interface ParkingSlotDao extends JpaRepository<ParkingSlots, Integer> {

}
