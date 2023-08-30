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
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
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
@Table(name = "Parking_Zone")
public class ParkingZone {

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "Zone_Id")
	private int zoneId;
	
	@Column(name = "Zone_Area", length = 30, nullable = false, unique=true)
	private String zoneArea;
	
	@Column(name = "Total_Slots", nullable = false)
	private int totalSlots;
	
	@Column(name = "Available_Slots", nullable = false)
	private int availSlots;
	
	@ManyToOne
	@JsonIgnoreProperties(value = "zones")
	@JoinColumn(name = "Area_Id", nullable = false)
	private ParkingArea area;
	
	@JsonIgnoreProperties(value = "zone")
	@OneToMany(mappedBy = "zone", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
	private List<ParkingSlots> slots = new ArrayList<ParkingSlots>();
	
	
	public void addSlot(ParkingSlots slot) {
        slots.add(slot);
        slot.setZone(this);
    }
}
