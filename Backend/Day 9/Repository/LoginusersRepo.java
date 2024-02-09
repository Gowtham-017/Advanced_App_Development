package com.example.events.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.events.demo.Entity.Loginusers;

public interface LoginusersRepo extends JpaRepository<Loginusers,Integer> {

}
