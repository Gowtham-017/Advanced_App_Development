package com.example.events.demo.Entity;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorld {
    @GetMapping("gowtham")
    public String hel(){
        return "I am Good";
    }

}
