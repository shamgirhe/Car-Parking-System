package com.app.pojos;

import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class PaymentDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="Payment_Id")
	private int paymId;
	
	@Column(name = "Payment_Time", nullable = false)
	private LocalDateTime paymentTime;
	
	@Column(name = "Ammount", nullable = false)
	private double ammount;
	
	@OneToOne
	@JoinColumn(name = "User_Id")
	private User user;
}
