package com.example.events.demo.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.events.demo.Entity.Events;

public interface EventsRepo extends JpaRepository<Events,Integer> {
    List<Events> findByAlleventsTypeid(int typeid);

}
