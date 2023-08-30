package com.app.dto;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Id;

import com.app.pojos.User;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CardDto {

	private int cardNo;
	private String cardHoldName;
	private LocalDate expiryDate;
	private int userId;
}
