package com.app.pojos;

import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Parking_Details")
public class ParkingDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "Details_Id")
	private int detailsId;
	
	@Column(name = "From_Date", nullable = false)
	private LocalDateTime fromDate;
	
	@Column(name = "To_Date", nullable = false)
	private LocalDateTime toDate;
	
//	@Enumerated(EnumType.STRING)
//	private PaymentMode paymentMode;
	
	@Column(name = "Total_Amt", nullable = false)
	private double totalAmt;
	
	@Column(name = "Car_Id")
	private int carId;
	
	@Column(name = "Area_Id")
	private int areaId;
	
	@Column(name = "Slot_Id")
	private int slotId;
	
	@Column(name = "Zone_Id")
	private int zoneId;
	
	@JsonIgnoreProperties("parkDetails")
	@OneToOne
	@JoinColumn(name = "User_Id")
	private User user;
		
}


