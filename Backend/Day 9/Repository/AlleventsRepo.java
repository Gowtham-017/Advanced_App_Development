package com.example.events.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.events.demo.Entity.Allevents;

public interface AlleventsRepo extends JpaRepository<Allevents,Integer> {

}
