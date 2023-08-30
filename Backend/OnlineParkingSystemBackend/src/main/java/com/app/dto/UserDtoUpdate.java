package com.app.dto;

import com.app.pojos.Role;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserDtoUpdate {

	 private String firstName;
	 private String lastName;
	 private String mobileNo;
	 private String email;
	 private String password;
}
