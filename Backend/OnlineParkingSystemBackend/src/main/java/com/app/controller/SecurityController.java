package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.DeleteParkingDto;
import com.app.services.SecurityService;


@RestController
@RequestMapping("/security")
@CrossOrigin
public class SecurityController {
	
	@Autowired
	private SecurityService securityService;
	
	//Delete booking 
	@DeleteMapping("/deletebooking")
	public String deleteBooking(@RequestBody DeleteParkingDto deleteParkingDto)
	{
		return securityService.deleteParking(deleteParkingDto.getCarId());
	}

}
