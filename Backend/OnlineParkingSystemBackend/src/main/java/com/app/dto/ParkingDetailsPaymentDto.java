package com.app.dto;

import java.time.LocalDateTime;

import com.app.pojos.PaymentMode;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ParkingDetailsPaymentDto {
	
	private LocalDateTime fromDate;
	private LocalDateTime toDate;
	private double totalAmt;
	private int areaId;
	private int zoneId;
	private int slotId;
	private int userId;
	private  int carId;
	
//	private LocalDateTime paymentTime;
//	private double ammount;
}
