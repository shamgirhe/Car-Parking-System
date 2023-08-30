package com.app.dto;

import javax.persistence.Column;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.app.pojos.ParkingArea;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ZoneDto {

	private String zoneArea;
	private int totalSlots;
	private int availSlots;
	private int areaId;
}

