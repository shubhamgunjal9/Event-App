package com.markytics.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Events {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer eventsId;

    private String eventsTitle;
    private String eventsDescription;
    @Column(nullable = false)
    private String eventsDate;

    @Column(nullable = false)
    private String eventsStartTime;

    @Column(nullable = false)
    private String eventsEndTime;

    private String eventsLocation;


    private String eventsVenue;

    private String eventsStatus;

    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "user_id")
    @JsonIgnoreProperties("events")
    private User user;

}
