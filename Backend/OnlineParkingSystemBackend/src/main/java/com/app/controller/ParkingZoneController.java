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

import com.app.dto.ZoneDto;
import com.app.pojos.ParkingZone;
import com.app.services.AdminService;
import com.app.services.ParkingZoneService;


@RestController
@RequestMapping("/parkingzone")
@CrossOrigin
public class ParkingZoneController {
	
	@Autowired
	private ParkingZoneService parkingZoneService;
	
	    //getAllZoneDetails
		@GetMapping("/zone")
		public List<ParkingZone>getAllParkingZoneDetails(){
			
			return parkingZoneService.getAllParkingZones();
		}
		
		// addParkingZone
		@PostMapping("/zone")
		public ResponseEntity<ParkingZone> addParkingZone(@RequestBody ZoneDto zoneDto)
		{
			ParkingZone zone = parkingZoneService.addParkingZone(zoneDto);
			if(zone != null)
			{
				return ResponseEntity.status(HttpStatus.CREATED).body(zone);
			}
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
			
		}
		

		// deleteParkingZone
		@DeleteMapping("/zone/{zid}")
		public String deleteParkingZone(@PathVariable ("zid") Integer id)
		{
			return parkingZoneService.deleteZone(id);
		}
		
		// updateParkingZone
			@PutMapping("/zone/{zid}")
			public ResponseEntity<ParkingZone> updateParkingZone(@PathVariable ("zid") Integer id, @RequestBody ZoneDto zoneDto)
			{
				ParkingZone zone = parkingZoneService.updateParkZone(id, zoneDto);
				
				if(zone != null)
				{
					return ResponseEntity.status(HttpStatus.CREATED).body(zone);
				}
				return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
			}
	

}
