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

// import com.example.events.demo.Entity.Allevents;
// import com.example.events.demo.Repository.AlleventsRepo;

// @CrossOrigin
// @RestController
// public class AlleventsController {
//     @Autowired
//     public AlleventsRepo allrepo;

//     @SuppressWarnings("null")
//     @PostMapping("/posttype")
// 	public ResponseEntity<String> saveUse(@RequestBody Allevents e) {
//         try {
//             allrepo.save(e);
//             return ResponseEntity.ok("Type Added");
//         } 
//         catch (Exception ex) {
//             return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error adding eventtype: " + ex.getMessage());
//         }
// 	}

//     @GetMapping("/gettype")
// 	public List<Allevents> getDetails() {
// 		return allrepo.findAll();
// 	}

// 	@DeleteMapping("/deletetype/{typeid}")
//     public ResponseEntity<String> deleteDetails(@PathVariable("typeid") int typeid) {
//     try {
//         allrepo.deleteById(typeid);
//         return ResponseEntity.ok("Deleted event type with type id:" + typeid);
//     } catch (Exception ex) {
//         return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
//             .body("Error deleting event type: " + ex.getMessage());
//     }
// }


// }



package com.example.events.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.events.demo.Entity.Allevents;
import com.example.events.demo.Repository.AlleventsRepo;

@CrossOrigin
@RestController
public class AlleventsController {
    
    @Autowired
    private AlleventsRepo allrepo;

    @SuppressWarnings("null")
    @PostMapping("/postetypes")
    public ResponseEntity<String> saveEventType(@RequestBody Allevents e) {
        try {
            allrepo.save(e);
            return ResponseEntity.ok("Event Type Added");
        } catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error adding event type: " + ex.getMessage());
        }
    }

    @GetMapping("/getetypes")
    public List<Allevents> getAllEventTypes() {
        return allrepo.findAll();
    }

    @DeleteMapping("/deleteetype/{typeid}")
    public ResponseEntity<String> deleteDetails(@PathVariable("typeid") int typeid) {
        try {
            allrepo.deleteById(typeid);
            return ResponseEntity.ok("Deleted event type with type id:" + typeid);
        } catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body("Error deleting event type: " + ex.getMessage());
        }
    }
}