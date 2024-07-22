// EventCard.jsx
import React from 'react';

import './EventCard.css'; // Ensure to create and import this CSS file

const EventCard = ({ event }) => {
    return (
        <div className="card event-card">
            <div className="card-body">
                <h5 className="card-title">{event.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{event.date}</h6>
                <p className="card-text">{event.description}</p>
            </div>
        </div>
    );
};

export default EventCard;
