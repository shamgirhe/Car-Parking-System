package com.app.pojos;

import java.util.ArrayList;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "User_Details")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "User_Id", nullable = false)
	private int userId;
	
	@Column(name = "First_Name", length = 30, nullable = false)
	private String firstName;
	
	@Column(name = "Last_Name", length = 30, nullable = false)
	private String lastName;
	
	@Column(name = "Mobile_No", length = 12, nullable = false)
	private String mobileNo;
	
	@Column(name = "Email", length = 30, nullable = false, unique=true)
	private String email;
	
	@Column(name = "Password", length = 200, nullable = false)
	private String password;
	
	@Enumerated(EnumType.STRING)
	private Role role;
	
	@Column(name = "Aadhar_No", length = 12, nullable = false, unique=true)
	private String aadharNo;
	
	//foreignKeys
	
	@LazyCollection(LazyCollectionOption.FALSE)
	@JsonIgnoreProperties("user")
	@OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<CarDetails> cars = new ArrayList<CarDetails>();
	
	@JsonIgnoreProperties("user")
	@OneToOne(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
	private CardDetails card;
	
	@OneToOne(mappedBy = "user")
	private PaymentDetails paymDetails;
	
	@JsonIgnoreProperties("user")
	@OneToOne(mappedBy = "user")
	private ParkingDetails parkDetails;
	
	@JsonIgnoreProperties("user")
	@OneToOne(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
	private FeedBack feedback;

	public User(String firstName, String lastName, String mobileNo, String email, String password, String aadharNo) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.mobileNo = mobileNo;
		this.email = email;
		this.password = password;
		this.aadharNo = aadharNo;
	}
	
	public void addCar(CarDetails car) {
        cars.add(car);
        car.setUser(this);
	}
}
