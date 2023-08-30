package com.app.pojos;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
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
@Table(name = "Parking_Area")
public class ParkingArea {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "Area_Id")
	private int areaId;
	
	@Column(name = "Area_Name", length = 30, nullable = false, unique=true)
	private String areaName;
	
	@Column(name = "Total_Slots", nullable = false)
	private int totalSlots;
	
	@Column(name = "Rate", nullable = false)
	private int rate;
	
	@JsonIgnoreProperties(value = "area")
	@OneToMany(mappedBy = "area", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
	private List<ParkingZone> zones = new ArrayList<ParkingZone>();
	
	
	public void addZone(ParkingZone zone) {
        zones.add(zone);
        zone.setArea(this);
    }

}
