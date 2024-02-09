package com.example.events.demo.Controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.events.demo.Entity.Loginusers;
import com.example.events.demo.Repository.LoginusersRepo;

@CrossOrigin
@RestController
public class LoginusersController {
    @Autowired
    public LoginusersRepo er;

    @SuppressWarnings("null")
    @PostMapping("/posteusers")
	public ResponseEntity<String> saveUse(@RequestBody Loginusers e) {
        try {
            er.save(e);
            return ResponseEntity.ok("User Added");
        } 
        catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error adding user: " + ex.getMessage());
        }
	}

    @GetMapping("/geteusers")
	public List<Loginusers> getDetails() {
		return er.findAll();
	}

	@DeleteMapping("/deleteeusers/{userId}")
	public String deleteDetails(@PathVariable("userId") int userId) {
		er.deleteById(userId);
		return "Deleted user with userid:"+userId;
	}

}
