package com.app.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dto.LoginForm;
import com.app.pojos.CarDetails;
import com.app.pojos.ParkingDetails;
import com.app.pojos.User;
import com.app.repositories.CarDao;
import com.app.repositories.ParkingDetailsDao;
import com.app.repositories.UserDao;

@Service
@Transactional
public class BaseServiceImpl implements BaseService {

	@Autowired
	private UserDao userDao;
	
	@Autowired
	private ParkingDetailsDao parkingDetailsDao;
	
	@Autowired
	private CarDao carDao;

	//Login
	@Override
	public String getPassword(LoginForm loginForm) {
		User user = userDao.findByEmail(loginForm.getEmail()).
				orElseThrow(()-> new RuntimeException("Invalid Email"));
		
		if(user != null)
		{
			user.getPassword();
			return "Password send to your email";
		}
		else
		{
			return "Invalid email address";
		}
	}
	
	
		// Get all ParkingDetails
		@Override
		public List<ParkingDetails> getAllParkingDetails() {
			return parkingDetailsDao.findAll();
		}
		
		//Get all Cars list
		@Override
		  public List<CarDetails>getAllCars(){
			  
			  return carDao.findAll();
		  }
			
		// get selected user car details
		 @Override
		  public List<CarDetails>getCarDetails(int userId){
			  
			  User user = userDao.findById(userId)
					  .orElseThrow(() -> new RuntimeException("User id not found"));
			  System.out.println("Inside");
			  return user.getCars();
		  }

}
