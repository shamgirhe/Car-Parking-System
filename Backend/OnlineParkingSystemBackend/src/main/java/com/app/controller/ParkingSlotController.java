package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.SlotDto;
import com.app.pojos.ParkingSlots;
import com.app.services.AdminService;
import com.app.services.ParkingSlotService;

@RestController
@RequestMapping("/parkingslot")
@CrossOrigin
public class ParkingSlotController {
	
	
	@Autowired
	private ParkingSlotService parkingSlotService;
	
	//getAllSlotDetails
		@GetMapping("/slot")
		public List<ParkingSlots>getAllParkingSlotDetails(){
			
			return parkingSlotService.getAllParkingSlots();
		}
		
		
		
		// addParkingSlots
		@PostMapping("/slot")
		public ResponseEntity<ParkingSlots> addParkingSlots(@RequestBody SlotDto slotDto)
		{
			ParkingSlots slot = parkingSlotService.addParkingSlot(slotDto);
			if(slot != null)
			{
				return ResponseEntity.status(HttpStatus.ACCEPTED).body(slot);
			}
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
		}
		
		// deleteParkingSlots
		@DeleteMapping("/slot/{sid}")
		public String deleteParkingSlot(@PathVariable ("sid") Integer id)
		{
			return parkingSlotService.deleteSlot(id);
		}
		
			
		// updateParkingSlot
			@PutMapping("/slot/{sid}")
			public ResponseEntity<ParkingSlots> updateParkingSlot(@PathVariable ("sid") Integer id, @RequestBody SlotDto slotDto)
			{
				ParkingSlots slot = parkingSlotService.updateParkSlot(id, slotDto);
				if(slot != null)
				{
					return ResponseEntity.status(HttpStatus.ACCEPTED).body(slot);
				}
				return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
			}

}
