package com.app.services;

import java.util.List;
import java.util.Optional;

import com.app.dto.CarDto;
import com.app.dto.CardDto;
import com.app.dto.LoginForm;
import com.app.dto.ParkingDetailsDto;
import com.app.dto.ParkingDetailsPaymentDto;
import com.app.dto.UserDto;
import com.app.dto.UserDtoUpdate;
import com.app.pojos.CarDetails;
import com.app.pojos.CardDetails;
import com.app.pojos.FeedBack;
import com.app.pojos.ParkingArea;
import com.app.pojos.ParkingDetails;
import com.app.pojos.ParkingSlots;
import com.app.pojos.ParkingZone;
import com.app.pojos.User;

public interface UserService {

	//Authenticate User (LogIn)
	User authenitcateUser(String email);
	
	//Register User (Sign in)
	User registerUser(UserDto user);
	
	//find userId By email
	Integer findUserId(String userName);
	
	//update user
	UserDtoUpdate updateUserDetails(int id, UserDtoUpdate userDto);
	
	//getAllParkingArea
	List<ParkingArea> showAllArea();
	
	//Get Selected Area parking Zone (Zone + Slots.... we get here)
	List<ParkingZone> getSlectedAreaParkingZone(int id);
	
	//Get Selected Zone parking Slots
	List<ParkingSlots> getSelectedZoneParkingSlots(int id);
	
	//add debit card details
	CardDetails addCardDetails(CardDto cardDto);
	
	//Book Parking
	ParkingDetails bookParking(ParkingDetailsPaymentDto parkingDetailsPaymentsDto);

	//addCardDetails
	CarDetails addCarDetails(int userId, CarDto carDto);

	//Delete Car details
	void deleteCarDetails(int userId, int carId);

	//delete debit card
	void deleteCard(int userId, int cardId);
	
	//get user by ID
	UserDto finfUserById(int userId);
	
	
	//Parking details by id
	public ParkingDetailsDto getParkingDetails(Integer userId);

}
