package com.app.services;

import java.util.List;

import com.app.dto.SlotDto;
import com.app.pojos.ParkingSlots;

public interface ParkingSlotService {
	
	//Get all Parking Slot details
		List<ParkingSlots> getAllParkingSlots();

		ParkingSlots updateParkSlot(int id, SlotDto slotDto);

		String deleteSlot(int id);

		ParkingSlots addParkingSlot(SlotDto sdto);

}
