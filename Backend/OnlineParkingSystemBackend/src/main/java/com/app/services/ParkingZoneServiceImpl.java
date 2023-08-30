package com.app.services;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dto.ZoneDto;
import com.app.pojos.ParkingArea;
import com.app.pojos.ParkingZone;
import com.app.repositories.ParkingAreaDao;
import com.app.repositories.ParkingZoneDao;


@Service
@Transactional
public class ParkingZoneServiceImpl implements ParkingZoneService {
	
	@Autowired
	private ParkingZoneDao parkingZoneDao;
	
	@Autowired
	private ParkingAreaDao parkingAreaDao;
	
	@Autowired
	private ModelMapper modelMapper;

	    //Get All Parking Zones
		@Override
		public List<ParkingZone> getAllParkingZones() {
			return parkingZoneDao.findAll();
		}

	    //Add Parking Zone
		@Override
		public ParkingZone addParkingZone(ZoneDto zdto) {
			ParkingArea area = parkingAreaDao.findById(zdto.getAreaId())
					.orElseThrow(()-> new RuntimeException("Invalid Area ID"));
			
			ParkingZone zoneArea = modelMapper.map(zdto, ParkingZone.class);
			zoneArea.setAvailSlots(zoneArea.getTotalSlots());

			area.addZone(zoneArea);
			parkingAreaDao.save(area);
			
			return zoneArea;
		}

		//Delete Parking Zone
		@Override
		public String deleteZone(int zoneId) {
			ParkingZone zone = parkingZoneDao.findById(zoneId)
					.orElseThrow(()-> new RuntimeException("Zone Id is invalid"));
			
			
			ParkingArea area = parkingAreaDao.findById(zone.getArea().getAreaId())
					.orElseThrow(()-> new RuntimeException("Area Id is invalid"));
			
			List<ParkingZone> zones = area.getZones();
			zones.remove(zone);
			area.setZones(zones);
			parkingZoneDao.deleteById(zoneId);
			
			return "Zone deleted succeessfully";
			
			}

		//Update Parking Zone details
		@Override
		public ParkingZone updateParkZone(int id, ZoneDto zoneDto) {
			ParkingZone zone = parkingZoneDao.findById(id)
					.orElseThrow(() -> new RuntimeException("Invalid zone id : updation failed !!!"));
			
			zone.setZoneId(id);
			zone.setZoneArea(zoneDto.getZoneArea());
			int num = zoneDto.getTotalSlots() - zone.getTotalSlots();
			zone.setAvailSlots(zoneDto.getAvailSlots() + num);
			zone.setTotalSlots(zoneDto.getTotalSlots());
			return parkingZoneDao.save(zone);
		}

}
