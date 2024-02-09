// package com.example.events.demo.Entity;


// import java.util.List;
// import jakarta.persistence.CascadeType;
// import jakarta.persistence.Column;
// import jakarta.persistence.Entity;
// import jakarta.persistence.GeneratedValue;
// import jakarta.persistence.GenerationType;
// import jakarta.persistence.Id;
// import jakarta.persistence.JoinColumn;
// import jakarta.persistence.OneToMany;
// import jakarta.persistence.Table;
// import lombok.AllArgsConstructor;
// import lombok.Getter;
// import lombok.NoArgsConstructor;
// import lombok.Setter;
// @Entity
// @Getter
// @Setter
// @NoArgsConstructor
// @AllArgsConstructor
// @Table(name="Eventtypes")
// public class Allevents {
//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private int typeid;
//     @Column
//     private String eventtype;
//     @OneToMany(cascade=CascadeType.ALL)
// 	@JoinColumn(name="fk_eventid")
// 	private List<Events> event;
    
// }




package com.example.events.demo.Entity;
import java.util.List;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name="Eventtypes")
public class Allevents {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int typeid;
    @Column
    private String eventtype;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "allevents", cascade = CascadeType.ALL)
    private List<Events> eventlist;
    
}