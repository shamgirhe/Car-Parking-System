package com.app.services;

import java.util.List;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.pojos.ParkingDetails;
import com.app.pojos.ParkingSlots;
import com.app.pojos.ParkingZone;
import com.app.repositories.ParkingDetailsDao;
import com.app.repositories.ParkingSlotDao;
import com.app.repositories.ParkingZoneDao;

@Service
@Transactional
public class SecurityServiceImpl implements SecurityService {

	@Autowired
	private ParkingDetailsDao parkingDetailsDao;
	
	@Autowired
	private ParkingSlotDao parkingSlotDao;
	
	@Autowired
	private ParkingZoneDao parkingZoneDao;
	
	@Autowired
	private ModelMapper modelMapper;
	
	//Delete parking (make slot available)
	@Override
	public String deleteParking(int carId) {
		ParkingDetails parkingDetails = parkingDetailsDao.findByCarId(carId)
				.orElseThrow(() -> new RuntimeException("Car_Id not found"));
		
		ParkingZone zone = parkingZoneDao.findById(parkingDetails.getZoneId())
				.orElseThrow(() -> new RuntimeException("Invalid ZoneId"));
		zone.setAvailSlots( zone.getAvailSlots() + 1);
		parkingZoneDao.save(zone);
		
		int slotId = parkingDetails.getSlotId();
		ParkingSlots parkingSlot = parkingSlotDao.findById(slotId).
				orElseThrow(() -> new RuntimeException("Slot_Id not found"));
		
		parkingSlot.setOccupied(false);
		ParkingSlots slot = parkingSlotDao.save(parkingSlot);
		if(slot != null)
		{
			return "Entry delete successfully";
		}
		
		return "Error while deleting entry";
	}
}
