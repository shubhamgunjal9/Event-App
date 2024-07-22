import EventCard from './EventCard';
import './Dashboard.css';

const Dashboard = () => {
 
    const dummyData = {
        upcomingEvents: [
            { title: 'Event 1', date: '2024-08-01', description: 'Description of Event 1' },
            { title: 'Event 2', date: '2024-08-15', description: 'Description of Event 2' },
            { title: 'Event 5', date: '2024-09-01', description: 'Description of Event 5' },
            { title: 'Event 6', date: '2024-09-15', description: 'Description of Event 6' },
            { title: 'Event 7', date: '2024-10-01', description: 'Description of Event 7' },
            { title: 'Event 8', date: '2024-10-15', description: 'Description of Event 8' },
        ],
        pastEvents: [
            { title: 'Event 3', date: '2024-06-01', description: 'Description of Event 3' },
            { title: 'Event 4', date: '2024-07-01', description: 'Description of Event 4' },
            { title: 'Event 9', date: '2024-05-01', description: 'Description of Event 9' },
            { title: 'Event 10', date: '2024-04-01', description: 'Description of Event 10' },
            { title: 'Event 11', date: '2024-03-01', description: 'Description of Event 11' },
            { title: 'Event 12', date: '2024-02-01', description: 'Description of Event 12' },
        ]
    };

    return (
        <div className="container mt-5">
            <div className="event-section">
                <h2 className="section-title">Upcoming Events</h2>
                <div className="event-cards-container">
                    {dummyData.upcomingEvents.map((event, index) => (
                        <div className="event-card-wrapper" key={index}>
                            <EventCard event={event} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="event-section mt-5">
                <h2 className="section-title">Past Events</h2>
                <div className="event-cards-container" >
                    {dummyData.pastEvents.map((event, index) => (
                        <div className="event-card-wrapper" key={index}>
                            <EventCard event={event} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
