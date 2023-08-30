package com.app.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.ParkingZone;

public interface ParkingZoneDao extends JpaRepository<ParkingZone, Integer> {

}
