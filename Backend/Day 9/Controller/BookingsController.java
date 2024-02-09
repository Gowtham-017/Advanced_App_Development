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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.events.demo.Entity.Bookings;
import com.example.events.demo.Repository.BookingRepo;
@CrossOrigin
@RestController
public class BookingsController {
    @Autowired
    private BookingRepo bkr;

    @SuppressWarnings("null")
    @PostMapping("/postebook")
    public ResponseEntity<String> saveEvent(@RequestBody Bookings e) {
        try {
            bkr.save(e);
            return ResponseEntity.ok("Booking Successful");
        } catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error booking event: " + ex.getMessage());
        }
    }
    @GetMapping("/getebook")
    public List<Bookings> getAllEvents() {
        return bkr.findAll();
    }

    @DeleteMapping("/deleteebook/{bookingid}")
	public String deleteDetails(@PathVariable("bookingid") int bookingid) {
		bkr.deleteById(bookingid);
		return "Deleted booking with bookingid:"+bookingid;
	}

    @PutMapping("/updateStatus/{bookingid}")
public ResponseEntity<?> updateBookingStatus(
    @PathVariable("bookingid") int bookingid,
    @RequestBody String newStatus
) {
    try {
        Bookings booking = bkr.findById(bookingid).orElse(null);
        if (booking != null) {
            booking.setStatus(newStatus);
            bkr.save(booking);
            return ResponseEntity.ok(booking);
        } else {
            return ResponseEntity.status(404).body("Booking not found with id: " + bookingid);
        }
    } catch (Exception e) {
        return ResponseEntity.status(500).body("Error updating status: " + e.getMessage());
    }
}



}
