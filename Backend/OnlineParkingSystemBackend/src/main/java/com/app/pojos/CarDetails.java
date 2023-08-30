package com.app.pojos;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
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
@Table(name = "Car_Details")
public class CarDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "Car_Id", nullable = false)
	private int carId;
	
	@Column(name = "Car_Type", length = 30)
	private String carType;
	
	@Column(name="Car_No", length = 10, nullable = false, unique=true)
	private int carNo;
	
	@JsonIgnoreProperties("cars")
	@ManyToOne
	@JoinColumn(name = "User_Id", nullable = false)
	private User user;
}
