package com.examportal.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.examportal.model.Bookings;


public interface BookingRepo extends JpaRepository<Bookings,Integer> {

}
