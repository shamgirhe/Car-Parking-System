package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import org.aspectj.weaver.tools.Trace;

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
public class ParkingSlots {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int slotId;
	
	@Column(name = "Slot_Name", length = 30, nullable = false)
	private String slotName;
	
	@Column(name = "Is_Occupied", nullable = false)
	private boolean isOccupied;
	
	@JsonIgnoreProperties(value = "slots")
	@ManyToOne
	@JoinColumn(name = "Zone_Id", nullable = false)
	private ParkingZone zone;

}
