package com.app.services;

import java.util.List;

import com.app.dto.AreaDto;
import com.app.dto.SlotDto;
import com.app.dto.UserDto;
import com.app.dto.ZoneDto;
import com.app.pojos.CarDetails;
import com.app.pojos.FeedBack;
import com.app.pojos.ParkingArea;
import com.app.pojos.ParkingSlots;
import com.app.pojos.ParkingZone;
import com.app.pojos.User;

public interface AdminService {

	//Get all user details
	List<UserDto> getAllUser();
	
	//Get all security details
	List<UserDto>getAllSecurity();
	
	//Delete user details
	void deleteUserDetails(Integer Id);
	
	//Delete security details
	void deleteSecurityDetails(Integer Id);
	
	//Add Admin details
	User addUserDetails(UserDto userdto);
	
	//get All users feedback
	List<FeedBack> getAllFeedBackDetails();
		
	//get selected user feedback
	FeedBack getUserFeedback(int id);
}
