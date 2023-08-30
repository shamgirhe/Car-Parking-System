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

import com.app.dto.AreaDto;
import com.app.pojos.ParkingArea;
import com.app.services.AdminService;
import com.app.services.ParkingAreaService;


@RestController
@RequestMapping("/parkingarea")
@CrossOrigin
public class ParkingAreaController {
	
	@Autowired
	private ParkingAreaService parkingService;
	
	//getAllParkingAreaDetails
		@GetMapping("/area")
		public List<ParkingArea>getAllParkingAreaDetails(){
			
			return parkingService.getAllParkingAreas();
		}
	
		// addParkingArea
		@PostMapping("/area")
		public ResponseEntity<ParkingArea> addParkingArea(@RequestBody AreaDto areaDto)
		{
			ParkingArea area = parkingService.addParkingArea(areaDto);
			if(area != null)
			{
				return ResponseEntity.status(HttpStatus.ACCEPTED).body(area);
			}
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
		}
	
		// deleteParkingArea
		@DeleteMapping("/area/{aid}")
		public String deleteParkingArea(@PathVariable ("aid") Integer id)
		{
			parkingService.deleteArea(id);
			return "Area deleted successfully";
		}
		
		// updateParkingArea
		@PutMapping("/area/{aid}")
		public ResponseEntity<ParkingArea> updateParkingArea(@PathVariable ("aid") Integer id, @RequestBody AreaDto areaDto)
		{
			ParkingArea area = parkingService.updateParkArea(id, areaDto);
			if(area != null)
			{
				return ResponseEntity.status(HttpStatus.ACCEPTED).body(area);
			}
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}

}
