package com.app.services;

import java.util.List;

import com.app.dto.AreaDto;
import com.app.pojos.ParkingArea;

public interface ParkingAreaService {

	List<ParkingArea> getAllParkingAreas();

	ParkingArea updateParkArea(int id, AreaDto areaDto);

	ParkingArea addParkingArea(AreaDto areaDto);

	void deleteArea(int id);

}