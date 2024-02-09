package com.example.events.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
@OpenAPIDefinition(
		info =@Info(
				title = "Corporate Events Manager",
				version = "1.1.2",
				description = "Manages Corporate Events",
				contact = @Contact(
						name = "Gowtham",
						email = "727721euit042@skcet.ac.in"
						)
				)
		)
@SpringBootApplication

public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

}
