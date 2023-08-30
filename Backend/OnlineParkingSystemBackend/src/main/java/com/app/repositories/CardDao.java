package com.app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.CardDetails;
import com.app.pojos.User;

public interface CardDao extends JpaRepository<CardDetails, Integer> {

	CardDetails findByUser(User user);
}
