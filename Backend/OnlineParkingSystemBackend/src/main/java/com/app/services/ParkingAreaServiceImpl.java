package com.app.services;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dto.AreaDto;
import com.app.pojos.ParkingArea;
import com.app.repositories.ParkingAreaDao;


@Service
@Transactional
public class ParkingAreaServiceImpl implements ParkingAreaService {

    @Autowired
    private ParkingAreaDao parkingAreaDao;
    
	@Autowired
	private ModelMapper modelMapper;
	
    
	//Get All Parking Area
	@Override
	public List<ParkingArea> getAllParkingAreas() {
		  return parkingAreaDao.findAll();
	}
	
	//Update Parking Area details
		@Override
		public ParkingArea updateParkArea(int id, AreaDto areaDto) {
			
			ParkingArea area = parkingAreaDao.findById(id)
					.orElseThrow(() -> new RuntimeException("Invalid area id : updation failed !!!"));
			area.setAreaId(id);
			area.setAreaName(areaDto.getAreaName());
			area.setTotalSlots(areaDto.getTotalSlots());
			area.setRate(areaDto.getRate());
			return parkingAreaDao.save(area);
		}

	//Add Parking Area
		@Override
		public ParkingArea addParkingArea(AreaDto adto) {
			
			ParkingArea parkArea = modelMapper.map(adto, ParkingArea.class);
			return parkingAreaDao.save(parkArea);
		}
		

		//Delete Parking Area
		@Override
		public void deleteArea(int id) {
			 parkingAreaDao.deleteById(id);
		}
}
