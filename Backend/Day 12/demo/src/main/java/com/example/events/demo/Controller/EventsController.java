// package com.example.events.demo.Controller;

// import java.util.List;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.web.bind.annotation.DeleteMapping;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RestController;

// import com.example.events.demo.Entity.Events;
// import com.example.events.demo.Repository.EventsRepo;

// @CrossOrigin
// @RestController
// public class EventsController {
//     @Autowired
//     public EventsRepo eventsrepo;

//     @SuppressWarnings("null")
//     @PostMapping("/postevent")
// 	public ResponseEntity<String> saveUse(@RequestBody Events e) {
//         try {
//             eventsrepo.save(e);
//             return ResponseEntity.ok("Event Added");
//         } 
//         catch (Exception ex) {
//             return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error adding event: " + ex.getMessage());
//         }
// 	}

//     @GetMapping("/getevent")
// 	public List<Events> getDetails() {
// 		return eventsrepo.findAll();
// 	}

// 	@DeleteMapping("/deleteevent/{eventid}")
// 	public String deleteDetails(@PathVariable("eventid") int eventid) {
// 		eventsrepo.deleteById(eventid);
// 		return "Deleted event with eventid:"+eventid;
// 	}


// }






package com.example.events.demo.Controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.events.demo.Entity.Events;
import com.example.events.demo.Repository.EventsRepo;

import io.swagger.v3.oas.annotations.tags.Tag;

@CrossOrigin
@RestController
public class EventsController {
    
    @Autowired
    private EventsRepo eventsrepo;
    
    @SuppressWarnings("null")
    @PostMapping("/posteevent")
    public ResponseEntity<String> saveEvent(@RequestBody Events e) {
        try {
            eventsrepo.save(e);
            return ResponseEntity.ok("Event Added");
        } catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error adding event: " + ex.getMessage());
        }
    }
    @Tag(name="Get Events", description="Fetches all the events")
    @GetMapping("/geteevents")
    public List<Events> getAllEvents() {
        return eventsrepo.findAll();
    }

    @DeleteMapping("/deleteeevent/{eventid}")
	public String deleteDetails(@PathVariable("eventid") int eventid) {
		eventsrepo.deleteById(eventid);
		return "Deleted user with eventid:"+eventid;
	}

}
