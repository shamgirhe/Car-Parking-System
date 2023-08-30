package com.app.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.FeedBack;
import com.app.pojos.User;

public interface feedBackDao extends JpaRepository<FeedBack, Integer>{
	
}
