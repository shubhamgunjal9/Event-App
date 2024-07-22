import React, { useEffect, useState } from 'react';
import EventCard from './ShowEventCard';
import EventModal from '../eventsmodal/EventModal';
import './ShowEvents.css';
import axios from 'axios';
import URL from '../../URL/URL';

export default function ShowEvents({ searchQuery }) {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const userId = sessionStorage.getItem('userId');

  useEffect(() => {
    fetchEvents();
  }, []);

  useEffect(() => {
    filterEvents();
  }, [searchQuery, events]);

  const fetchEvents = () => {
    axios.get(`${URL}/events/getall/${userId}`)
      .then((response) => {
        setEvents(response.data);
        setFilteredEvents(response.data); 
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
        alert("An error occurred while fetching events. Please try again later.");
      });
  };

  const filterEvents = () => {
    const lowercasedQuery = searchQuery.toLowerCase();
    const filtered = events.filter(event => 
      event.eventsTitle.toLowerCase().includes(lowercasedQuery) ||
      event.eventsDescription.toLowerCase().includes(lowercasedQuery) ||
      event.eventsLocation.toLowerCase().includes(lowercasedQuery) ||
      event.eventsVenue.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredEvents(filtered);
  };

  const handleDelete = (eventId) => {
    axios.delete(`${URL}/events/delete/${eventId}`)
      .then(() => {
        fetchEvents();
      })
      .catch((error) => {
        console.error("Error deleting event:", error);
     //   alert("An error occurred while deleting the event. Please try again later.");
      });
      // window.location.reload()
  };

  const handleUpdate = (eventId) => {
    axios.get(`${URL}/events/getbyid/${eventId}`)
      .then((response) => {
        setSelectedEvent(response.data);
         
      })
      .catch((error) => {
        console.error("Error fetching event details:", error);
       // alert("An error occurred while fetching event details. Please try again later.");
      });
     
  };

  const handleModalClose = () => {
    setSelectedEvent(null);
  };

  const handleFormSubmit = (updatedEvent) => {
    axios.put(`${URL}/events/update`, updatedEvent)
      .then(() => {
        fetchEvents(); 
        setSelectedEvent(null);
      })
      .catch((error) => {
        console.error("Error updating event:", error);
     //   alert("An error occurred while updating the event. Please try again later.");
      });
      // window.location.reload()
  };

  return (
    <div className="show-events">
      <h2 className="title">Events</h2>
      <div className="events-list">
        {filteredEvents.map(event => (
          <EventCard 
            key={event.eventsId} 
            event={event} 
            onDelete={handleDelete} 
            onUpdate={() => handleUpdate(event.eventsId)} 
          />
        ))}
      </div>
      {selectedEvent && (
        <EventModal 
          event={selectedEvent} 
          onClose={handleModalClose} 
          onUpdate={handleFormSubmit} 
        />
      )}
    </div>
  );
}
