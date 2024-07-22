import React from 'react';
import './ShowEventCard.css';

export default function ShowEventCard({ event, onDelete, onUpdate }) {
  return (
    <div className="event-card">
      <h3 className="event-title">{event.eventsTitle}</h3>
      <p className="event-description">{event.eventsDescription}</p>
      <p className="event-date-time">
        <strong>Date:</strong> {event.eventsDate} <strong>Time:</strong> {event.eventsTime}
      </p>
      <p className="event-location">
        <strong>Location:</strong> {event.eventsLocation}
      </p>
      <p className = 'event-venue'>
        <strong>venue :</strong> {event.eventsVenue}
      </p>
      <p className = 'event-venue'>
        <strong>start :</strong> {event.eventsStartTime}
      </p>
      <p className = 'event-venue'>
        <strong>start :</strong> {event.eventsEndTime}
      </p>
      
      <p className={`event-status ${event.eventsStatus.toLowerCase()}`}>
        <strong>Status:</strong> {event.eventsStatus}
      </p>
      <div className="event-actions">
        <button onClick={() => onUpdate(event)} className="update-btn">Update</button>
        <button onClick={() => onDelete(event.eventsId)} className="delete-btn">Delete</button>
      </div>
    </div>
  );
}
