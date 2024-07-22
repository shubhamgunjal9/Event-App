package com.markytics.service;

import com.markytics.dto.EventsDto;
import com.markytics.entity.Events;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface EventsService {
    public Events addEvents(EventsDto eventsDto);

    public List<Events> showAllEvents(Integer userId);

    public void deleteEvent(Integer eventId);

    public Events update(EventsDto eventsDto);

    public Events getById(Integer eventId);


}
