package com.app.dto;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class RegistrationForm {

	private String email;
	private String firstName;
	private String lastName;
	private String password;
	private String mobileNo;
	private String aadharNo;
}
