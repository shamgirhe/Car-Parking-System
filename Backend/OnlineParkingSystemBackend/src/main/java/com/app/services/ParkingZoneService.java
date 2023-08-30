package com.app.services;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dto.ZoneDto;
import com.app.pojos.ParkingZone;

@Service
@Transactional
public interface ParkingZoneService {
	
	    //Get all Parking Zone details
		List<ParkingZone> getAllParkingZones();
		

	    //Add parking zone
		ParkingZone addParkingZone(ZoneDto zdto);
		

		//Delete Parking Zone
		String deleteZone(int id);
		
		//Update Parking Zone
		ParkingZone updateParkZone (int id, ZoneDto zoneDto);
}

