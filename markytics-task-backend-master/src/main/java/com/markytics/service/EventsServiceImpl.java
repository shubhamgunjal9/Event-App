package com.markytics.service;

import com.markytics.dto.EventsDto;
import com.markytics.entity.Events;
import com.markytics.entity.User;
import com.markytics.repository.EventsRepository;
import com.markytics.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.CopyOnWriteArrayList;

@Component
public class EventsServiceImpl implements EventsService {

    @Autowired
    private  EventsRepository eventsRepository;

    @Autowired
    private UserRepository userRepository;



    @Override
    public Events addEvents(EventsDto eventsDto) {
        Events events = updateEvents(eventsDto);
        return eventsRepository.save(events);
    }

    @Override
    public List<Events> showAllEvents(Integer userId) {
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
        List<Events> list =  user.getEvents();
        CopyOnWriteArrayList<Events> eventsList = new CopyOnWriteArrayList<>(list);
        LocalDate todayDate = LocalDate.now();
        LocalTime currentTime = LocalTime.now();

        for (Events event : eventsList) {
            LocalDate eventDate = LocalDate.parse(event.getEventsDate());
            LocalTime eventTime = LocalTime.parse(event.getEventsStartTime());

            if (eventDate.isBefore(todayDate) || (eventDate.isEqual(todayDate) && eventTime.isBefore(currentTime))) {
                event.setEventsStatus("COMPLETED");
            } else {
                event.setEventsStatus("NOT-COMPLETED");
            }
            eventsRepository.save(event);
        }
        return eventsList;
    }

    @Override
    public void deleteEvent(Integer eventId) {
        eventsRepository.deleteById(eventId);
    }

    @Override
    public Events update(EventsDto eventsDto) {
        Integer eventId = eventsDto.getEventId();
        if (eventId == null) {
            throw new IllegalArgumentException("Event ID must not be null");
        }

        Optional<Events> optionalEvent = eventsRepository.findById(eventId);
        if (!optionalEvent.isPresent()) {
            throw new IllegalArgumentException("Event with ID " + eventId + " not found");
        }

        Events events = optionalEvent.get();
        events.setEventsTitle(eventsDto.getEventsTitle());
        events.setEventsDescription(eventsDto.getEventsDescription());
        events.setEventsLocation(eventsDto.getEventsLocation());
        events.setEventsEndTime(eventsDto.getEventsEndTime());
        events.setEventsStartTime(eventsDto.getEventsStartTime());
        events.setEventsVenue(eventsDto.getEventsVenue());
        events.setEventsDate(eventsDto.getEventsDate());

        return eventsRepository.save(events);
    }
    @Override
    public Events getById(Integer eventId) {
        return eventsRepository.findById(eventId).get();
    }


    private Events updateEvents(EventsDto eventsDto) {
        Events events = new Events();
        LocalDate eventDate = LocalDate.parse(eventsDto.getEventsDate());
        LocalDate today = LocalDate.now();

        LocalTime eventTime = LocalTime.parse(eventsDto.getEventsEndTime());
        LocalTime todayTime = LocalTime.now();


        boolean isAfter = eventDate.isAfter(today);
        boolean isAfterTime = eventTime.isAfter(todayTime);
        if(isAfter && isAfterTime) {
            events.setEventsStatus("COMPLETED");
        } else {
            events.setEventsStatus("NOT-COMPLETED");
        }

        List<Events> list = eventsRepository.findAll();
        events.setUser(new User(eventsDto.getUserId()));
        events.setEventsDate(eventsDto.getEventsDate());
        events.setEventsDescription(eventsDto.getEventsDescription());
        events.setEventsLocation(eventsDto.getEventsLocation());
        for(Events even : list) {
            if(even.getEventsVenue() == eventsDto.getEventsVenue()
            && even.getEventsStartTime().equals(eventsDto.getEventsStartTime())
            ) {
                throw new RuntimeException("already an event present for this time");
            } else {
                events.setEventsEndTime(eventsDto.getEventsEndTime());
                events.setEventsStartTime(eventsDto.getEventsStartTime());
                events.setEventsVenue(eventsDto.getEventsVenue());
            }
        }

        events.setEventsTitle(eventsDto.getEventsTitle());
        return events;
    }
}
