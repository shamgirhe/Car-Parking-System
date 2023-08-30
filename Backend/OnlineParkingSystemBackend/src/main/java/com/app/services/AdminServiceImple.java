package com.app.services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.ModelMap;

import com.app.dto.AreaDto;
import com.app.dto.SlotDto;
import com.app.dto.UserDto;
import com.app.dto.ZoneDto;
import com.app.pojos.CarDetails;
import com.app.pojos.CardDetails;
import com.app.pojos.FeedBack;
import com.app.pojos.ParkingArea;
import com.app.pojos.ParkingSlots;
import com.app.pojos.ParkingZone;
import com.app.pojos.Role;
import com.app.pojos.User;
import com.app.repositories.CarDao;
import com.app.repositories.CardDao;
import com.app.repositories.ParkingAreaDao;
import com.app.repositories.ParkingSlotDao;
import com.app.repositories.ParkingZoneDao;
import com.app.repositories.UserDao;
import com.app.repositories.feedBackDao;

@Service
@Transactional
public class AdminServiceImple implements AdminService {


	@Autowired
	private UserDao userDao;
	
	@Autowired
	private feedBackDao feedBackDao;
	
	@Autowired
	private CardDao cardDao;
	
	@Autowired
	private PasswordEncoder encoder;
	
	@Autowired
	private ModelMapper modelMapper;
	
	// Get all users having Role as USER
	@Override
	 public List<UserDto> getAllUser(){
		  List<User> users = userDao.findByRole( Role.ROLE_USER);
		  
		  List<UserDto> userDto = users.stream().map((user) -> modelMapper.map(user, UserDto.class)).collect(Collectors.toList());
		  return userDto;
	  }
	  
	// Get all users having Role as SECURITY
	@Override
	  public List<UserDto> getAllSecurity(){
		  
		  List<User> users = userDao.findByRole(Role.ROLE_SECURITY);
		  List<UserDto> userDto = users.stream().map((user) -> modelMapper.map(user, UserDto.class)).collect(Collectors.toList());
		  return userDto;
	  }
	  

	//Delete users details having Role as USER
	@Override
	  public void deleteUserDetails(Integer Id) {
		  User user = userDao.findById(Id)
				  .orElseThrow(()-> new RuntimeException("User ID is invalid"));
		  
		 userDao.delete(user);	  
	 }
	
	//Delete users details having Role as SECURITY
	@Override
	public void deleteSecurityDetails(Integer Id) {

		userDao.deleteById(Id);
	}

	//Add user details (admin / security)
	@Override
	public User addUserDetails(UserDto userdto) {
		userdto.setPassword(encoder.encode(userdto.getPassword()));
		User user=modelMapper.map(userdto, User.class);
		return userDao.save(user);
	}
	
	
	//get all users feedback
		@Override
		public List<FeedBack> getAllFeedBackDetails() {
			return feedBackDao.findAll();
		}

		
	//get selected user's feedback
	@Override
	public FeedBack getUserFeedback(int userId) {
		User user = userDao.findById(userId)
				.orElseThrow(() -> new RuntimeException("User Id is invalid"));
		
		return user.getFeedback();
	}
}
