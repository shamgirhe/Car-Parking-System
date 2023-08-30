package com.app.controller;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.LoginForm;
import com.app.pojos.CarDetails;
import com.app.pojos.ParkingDetails;
import com.app.services.BaseService;

@RestController
@RequestMapping("/base")
@CrossOrigin
public class BaseController {

	@Autowired
	private BaseService baseService;
	
		//Logout method
		@PostMapping("/logout")
		public String logout(HttpSession session) {
			session.invalidate();
			return "Logout sccessfully";
		}
		
		
		// Forgot Password
		@PostMapping("password")
		public String forgotPassword(@RequestBody LoginForm loginForm )
		{
			return baseService.getPassword(loginForm);
		}
		
		//Get ParkingDetails
		@GetMapping("/parkingdetails")
		public List<ParkingDetails> showParkingDetails()
		{
			return baseService.getAllParkingDetails();
		}
		
		//Get CarDetails
			@GetMapping("/cardetails/{uid}")
			public List<CarDetails>getSelectedCarDetails(@PathVariable ("uid") Integer id){
				return baseService.getCarDetails(id);
			}
				
}
