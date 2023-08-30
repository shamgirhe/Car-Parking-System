package com.app.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.app.pojos.ParkingDetails;

public interface SecurityService {

	String deleteParking(int carId);
}
