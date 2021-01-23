import {Link} from 'react-router-dom';

export const Navigation = () => {
    return (
        <ul>
            <li><Link to="/">Calendar</Link></li>
            <li><Link to="/events/2021-02-01">Events (2021-02-01)</Link></li>
            <li><Link to="/activities/add">Create Activity</Link></li>
            <li><Link to="/events/add">Create Event</Link></li>
        </ul>
    );
};
