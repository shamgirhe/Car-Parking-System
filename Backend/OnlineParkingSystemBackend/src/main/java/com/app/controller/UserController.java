package com.app.controller;

import java.sql.ResultSet;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import javax.servlet.http.HttpSession;

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
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.CarDto;
import com.app.dto.CardDto;
import com.app.dto.LoginForm;
import com.app.dto.ParkingDetailsDto;
import com.app.dto.ParkingDetailsPaymentDto;
import com.app.dto.RegistrationForm;
import com.app.dto.UserDto;
import com.app.dto.UserDtoUpdate;
import com.app.pojos.CarDetails;
import com.app.pojos.CardDetails;
import com.app.pojos.ParkingArea;
import com.app.pojos.ParkingDetails;
import com.app.pojos.ParkingSlots;
import com.app.pojos.ParkingZone;
import com.app.pojos.Role;
import com.app.pojos.User;
import com.app.repositories.CarDao;
import com.app.services.*;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {

	@Autowired
	private UserService userService;
	
	public UserController() {

		System.out.println("inside def cnstr of "+ getClass());
	}
	
	@PostMapping("/register")
	public User register(@RequestBody UserDto register)
	{	
		User user = new User(register.getFirstName(), register.getLastName(), register.getMobileNo(), register.getEmail(), register.getPassword(), register.getAadharNo());
		user.setRole(Role.ROLE_USER);
		
		return userService.registerUser(register);
	}
	
	//get user details by ID
	@GetMapping("/userdetails/{userId}")
	public ResponseEntity<UserDto> getUserById(@PathVariable ("userId") Integer userId)
	{
		UserDto userDto = userService.finfUserById(userId);

		if(userDto != null)
		{
			return ResponseEntity.status(HttpStatus.OK).body(userDto);
		}
		
		return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
	}
	
	//Update user details
		@PutMapping("/update/{userId}")
		public ResponseEntity<UserDtoUpdate> updateUserDetails(@RequestBody UserDtoUpdate userDto, @PathVariable ("userId") Integer userId)
		{
			UserDtoUpdate updatedUserDto = userService.updateUserDetails(userId, userDto);
			
			if(updatedUserDto != null)
			{
				return ResponseEntity.status(HttpStatus.ACCEPTED).body(updatedUserDto);
			}
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
		}
	
	
	// show area
	@GetMapping("/showarea")
	public List<ParkingArea> showAllParkingAreas()
	{
		List<ParkingArea> parkingAreaList = userService.showAllArea();
		return parkingAreaList;
	}
	
	//Get Selected Parking Zones according to area-id
	@GetMapping("/getarea/{aid}")
	public List<ParkingZone> getSelectedAreaZones(@PathVariable ("aid") int id)
	{
		List<ParkingZone> allParkingZones =  userService.getSlectedAreaParkingZone(id);
		return allParkingZones;	
	}
	
	//Get Selected Parking Slots according to zone-id
	@GetMapping("/getslots/{zid}")
	public List<ParkingSlots> getSlots(@PathVariable ("zid") int id)
	{
		List<ParkingSlots> totalParkingSlots = userService.getSelectedZoneParkingSlots(id);
		return totalParkingSlots;
	}
	
		
		// add car
		@PostMapping("/addcar/{userId}")
		public CarDetails addCarDetails(@RequestBody CarDto carDto, @PathVariable  Integer userId) {
			
			CarDetails car=userService.addCarDetails(userId,carDto);
			return car;
		}
		
		
		//DeleteCar
				@DeleteMapping("/deletecar/{userId}/{carId}")
				public String deleteCarDetails(@PathVariable(value="userId")Integer userId, @PathVariable(value="carId")Integer carId){
					userService.deleteCarDetails(userId, carId);
					
					return "deleted car details ...:)";
				}
				
				
		//add debit card details
		@PostMapping("/addcard")
		public CardDetails addCardDetails(@RequestBody CardDto cardDto) {
			
			CardDetails card=userService.addCardDetails(cardDto);
			return card;
		}
		
		//remove debit card
		@DeleteMapping("/deletecard/{uid}/{cid}")
		public String deleteCard(@PathVariable ("uid") Integer userId, @PathVariable ("cid") Integer cardId)
		{
			userService.deleteCard(userId, cardId);
			return "Card removed successfully";
		}
	
		//book parking
		@PostMapping("/bookparking")
		public ParkingDetails bookParking(@RequestBody ParkingDetailsPaymentDto parkingDetailsPaymentDto, HttpSession session)
		{
			System.out.println("booking parking");
			ParkingDetails parkingDetails = userService.bookParking(parkingDetailsPaymentDto);
			session.setAttribute("ammount", parkingDetails);
			return parkingDetails;
		}
		
		
		//get parking details
		@GetMapping("/parking/{userId}")
		public ResponseEntity<ParkingDetailsDto> getParkingDetails(@PathVariable ("userId") Integer userId)
		{
		System.out.println(userId);
			ParkingDetailsDto parkingDto = userService.getParkingDetails(userId);
			
			if(parkingDto != null)
			{
				return ResponseEntity.status(HttpStatus.OK).body(parkingDto);
			}
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
		}
}
