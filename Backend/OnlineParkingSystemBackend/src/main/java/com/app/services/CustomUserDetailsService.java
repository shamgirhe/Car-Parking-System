package com.app.services;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dto.UserDto;
import com.app.pojos.User;
import com.app.repositories.UserDao;

import lombok.ToString;

@Service // or @Component also works!
@Transactional

public class CustomUserDetailsService implements UserDetailsService {
	// dep : user repository : based upon spring data JPA
	@Autowired
	private UserDao userDao;


	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		System.out.println("in load by user nm " + email);
//		 invoke dao's method to load user details from db by username(ie. actaully an
//		 email)
		User user = userDao.
				findByEmail(email).orElseThrow(() -> new UsernameNotFoundException("Invalid Email ID "));
		System.out.println("lifted user dtls from db "+user);
		return new CustomUserDetails(user);
	}

}
