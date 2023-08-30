package com.app.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.ParkingDetails;
import com.app.pojos.User;

public interface ParkingDetailsDao extends JpaRepository<ParkingDetails, Integer> {

	Optional<ParkingDetails> findByCarId(int id);
	ParkingDetails findByUser(User user);
}
