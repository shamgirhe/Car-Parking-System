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

import com.app.dto.UserDto;
import com.app.dto.UserDtoUpdate;
import com.app.pojos.FeedBack;
import com.app.pojos.Role;
import com.app.pojos.User;
import com.app.services.AdminService;
import com.app.services.UserService;

@RestController
@RequestMapping("/admin")
@CrossOrigin
public class AdminController {
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private AdminService adminService;
	
	public AdminController() {

		System.out.println("inside def cnstr of "+ getClass());
	}

	
	//-------------------------------------------------------------------------------------------
	//USER GET, DELETE
	//--------------------------------------------------------------------------------------------
	
		//getUSerDetails
		@GetMapping("/user")
		public List<UserDto> getAllUserDetails(){
			
			return adminService.getAllUser();
			
		}
			
		//DeleteUSer
		@DeleteMapping("/user/{id}")
		public String deleteUserDetails( @PathVariable(value = "id") Integer UserId) {
			
			adminService.deleteUserDetails(UserId);
			
			return "deleted successfully";
		}
		
			
  //-----------------------------------------------------------------------------------------------------
			//GET, POST, PUT, DELETE
			//SECURITY
 //---------------------------------------------------------------------------------------------------------
			//getSecurityDetails
			@GetMapping("/security")
			public List<UserDto>getAllSecurityDetails(){
				
				return adminService.getAllSecurity();
			}
			

			//DeleteSecurity
			@DeleteMapping("/security/{id}")
			public String deleteSecurityDetails(@PathVariable(value="id") Integer UserId) {
				
				adminService.deleteSecurityDetails(UserId);
				
				return "deleted Security";	
			}
			
			//addSecurityRole
			@PutMapping("/security")
			public ResponseEntity<User> addSecurityDetails(@RequestBody UserDto userdto) {
			   userdto.setRole(Role.ROLE_SECURITY);
				User user = adminService.addUserDetails(userdto);	
				if(user != null)
				{
					return ResponseEntity.status(HttpStatus.CREATED).body(user);
				}
				return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
			}
			
			//update security
			@PutMapping("/security/{id}")
			public ResponseEntity<UserDtoUpdate> updateSecurityDetails(@PathVariable("id") Integer userId, @RequestBody UserDtoUpdate userDto) {
				
				UserDtoUpdate updatedUser = userService.updateUserDetails(userId, userDto);
				
				if(updatedUser != null)
				{
					return ResponseEntity.status(HttpStatus.ACCEPTED).body(updatedUser);
				}
				return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
			}
			
	
	// -------------------------------------------------------------------------------------------
			//Add admin details
			@PostMapping("/useradmin")
			public ResponseEntity<User> addAdminDetails(@RequestBody UserDto userdto) {
				userdto.setRole(Role.ROLE_ADMIN);
				User user = adminService.addUserDetails(userdto);	
				if(user != null)
				{
					return ResponseEntity.status(HttpStatus.CREATED).body(user);
				}
				return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
			}
			
			
	// -----------------------------------------------------------------------------------------------
			
			// get feedback of all users
			@GetMapping("/feedback")
			public List<FeedBack> getAllUsersFeedback()
			{
				return adminService.getAllFeedBackDetails();
			}
			
			
			// get feedback of selected user
			@GetMapping("/feedback/{uid}")
			public ResponseEntity<FeedBack> getFeedbackById(@PathVariable ("uid") Integer id)
			{
				FeedBack feedback = adminService.getUserFeedback(id);
				
				if(feedback != null)
				{
					 return ResponseEntity.status(HttpStatus.FOUND).body(feedback);
				}
				return ResponseEntity.status(HttpStatus.NOT_FOUND).build();	
			}
}


