package com.example.events.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.events.demo.Entity.Bookings;

public interface BookingRepo extends JpaRepository<Bookings,Integer> {

}
