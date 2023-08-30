package com.app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.PaymentDetails;

public interface PaymentDao extends JpaRepository<PaymentDetails, Integer> {

}
