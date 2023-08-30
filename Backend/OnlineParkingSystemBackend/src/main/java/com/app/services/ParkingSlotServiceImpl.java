package com.app.services;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dto.SlotDto;
import com.app.pojos.ParkingArea;
import com.app.pojos.ParkingSlots;
import com.app.pojos.ParkingZone;
import com.app.repositories.ParkingSlotDao;
import com.app.repositories.ParkingZoneDao;


@Service
@Transactional
public class ParkingSlotServiceImpl implements ParkingSlotService {

	@Autowired
	private ParkingSlotDao parkingSlotDao;
	
	@Autowired
	private ParkingZoneDao parkingZoneDao;
	
	@Autowired
	private ModelMapper modelMapper;
	
	//Get All Parking Slots
		@Override
		public List<ParkingSlots> getAllParkingSlots() {
			return parkingSlotDao.findAll();
		}
		
		
		//Update Parking Slot details
		@Override
		public ParkingSlots updateParkSlot(int id, SlotDto slotDto) {
			ParkingSlots slot = parkingSlotDao.findById(id)
					.orElseThrow(() -> new RuntimeException("Invalid slot id : updation failed !!!"));
			slot.setSlotId(id);
			slot.setSlotName(slotDto.getSlotName());
			return parkingSlotDao.save(slot);
		}
		
		//Delete Parking Slot
		@Override
		public String deleteSlot(int slotId) 
		{
			
			ParkingSlots slot = parkingSlotDao.findById(slotId)
					.orElseThrow(()-> new RuntimeException("Slot Id is invalid"));
			
			
			ParkingZone zone = parkingZoneDao.findById(slot.getZone().getZoneId())
					.orElseThrow(()-> new RuntimeException("Zone Id is invalid"));
			
			List<ParkingSlots> slots = zone.getSlots();
			slots.remove(slot);
			zone.setSlots(slots);
			parkingSlotDao.deleteById(slotId);
			
			return "Slot deleted succeessfully";
		}
        

		//Add Parking Slot
		@Override
		public ParkingSlots addParkingSlot(SlotDto sdto) {
			
			ParkingZone zone = parkingZoneDao.findById(sdto.getZoneId())
					.orElseThrow(()-> new RuntimeException("Invalid Zone Id"));
			
			ParkingSlots slotTobeAdded = modelMapper.map(sdto, ParkingSlots.class);
			zone.addSlot(slotTobeAdded);
			parkingZoneDao.save(zone);
			
			return slotTobeAdded;
		}

}
