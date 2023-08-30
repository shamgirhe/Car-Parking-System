package com.app.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojos.CarDetails;

@Repository
public interface CarDao extends JpaRepository<CarDetails, Integer>{

}
