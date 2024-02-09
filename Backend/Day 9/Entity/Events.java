// package com.example.events.demo.Entity;

// import jakarta.persistence.Column;
// import jakarta.persistence.Entity;
// import jakarta.persistence.GeneratedValue;
// import jakarta.persistence.GenerationType;
// import jakarta.persistence.Id;
// import jakarta.persistence.Table;
// import lombok.AllArgsConstructor;
// import lombok.Getter;
// import lombok.NoArgsConstructor;
// import lombok.Setter;
// @Entity
// @Getter
// @Setter
// @AllArgsConstructor
// @NoArgsConstructor
// @Table(name="Events")
// public class Events {
//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
// 	private int eventid;
//     @Column
//     private String eventname;
//     @Column
//     private String eventdesc;
//     @Column
//     private String eventimg;
    
    
// }



package com.example.events.demo.Entity;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name="Events")
public class Events {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int eventid;
    @Column
    private String eventname;
    @Column
    private String eventdesc;
    @Column
    private String eventimg;
    
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "alleventid")
    private Allevents allevents; 
}