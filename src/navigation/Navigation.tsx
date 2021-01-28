import {Link} from 'react-router-dom';

export const Navigation = () => {
    const today = new Date().toISOString().substring(0, 10);
    return (
        <ul>
            <li><Link to="/">Calendar</Link></li>
            <li><Link to={`/events/${today}`}>Events (today)</Link></li>
            <li><Link to="/activities/add">Create Activity</Link></li>
            <li><Link to="/events/add">Create Event</Link></li>
        </ul>
    );
};
