package com.markytics.controller;

import com.markytics.dto.EventsDto;
import com.markytics.entity.Events;
import com.markytics.service.EventsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/events")
@CrossOrigin("*")
public class EventsController {

    @Autowired
    private EventsService eventsService;

    @PostMapping("/save")
    public ResponseEntity<Events> saveEvents(@RequestBody EventsDto eventsDto) {
        return ResponseEntity.ok(eventsService.addEvents(eventsDto));
    }

    @GetMapping("/getall/{userId}")
    public ResponseEntity<List<Events>> findAllEVents(@PathVariable("userId") Integer userId) {
        List<Events> list = eventsService.showAllEvents(userId);
        return ResponseEntity.ok(list);
    }

    @DeleteMapping("/delete/{eventId}")
    public ResponseEntity<String> deleteEVent(@PathVariable("eventId") Integer eventId) {
        eventsService.deleteEvent(eventId);
        return ResponseEntity.ok("deleted");
    }


    @PutMapping("/update")
    public ResponseEntity<Events> updateEvents(@RequestBody EventsDto eventsDto) {
        if (eventsDto.getEventId() == null) {
            System.out.println("not updated");
            return ResponseEntity.badRequest().body(null);
        }
        try {
            Events events = eventsService.update(eventsDto);
            return ResponseEntity.ok(events);
        } catch (IllegalArgumentException e) {
            System.out.println("not updated");
            return ResponseEntity.badRequest().body(null);
        }
    }

    @GetMapping("/getbyid/{eventId}")
    public ResponseEntity<Events> getbyId(@PathVariable("eventId") Integer eventId) {
        Events events = eventsService.getById(eventId);
        return ResponseEntity.ok(events);
    }



}
