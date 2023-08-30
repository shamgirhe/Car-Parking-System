package com.app.pojos;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "Card_Details")
public class CardDetails {

	@Id
	@Column(name = "Card_No", unique=true)
	private int cardNo;
	
	@Column(name = "CardHolder_Name", length = 30, nullable = false)
	private String cardHoldName;
	
	@Column(name = "Expiry_Date", nullable = false)
	private LocalDate expiryDate;

	@OneToOne
	@JoinColumn(name = "User_Id", nullable = false)
	private User user;
}
