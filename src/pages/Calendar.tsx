import {useRecoilState} from 'recoil';
import {Activity, state} from '../state/state';

export const Calendar = () => {
    const [activities, setActivities] = useRecoilState(state.activities);
    const [events, setEvents] = useRecoilState(state.events);

    const getActivity = (queryId: string): Activity => {
        return activities.find(({id}) => queryId === id) || {name: '', id: ''};
    };

    const removeActivity = (activityId: string) => () => {
        setActivities(activities.filter(({id}) => id !== activityId));
    };

    const removeEvent = (eventId: string) => () => {
        setEvents(events.filter(({id}) => id !== eventId));
    };

    const formatDate = (date: string) => {
        return new Date(date).toISOString().substring(0, 10);
    };

    return (
        <>
            <h1>Calendar</h1>
            <h3>Activities</h3>
            <ul>
                {activities.map((activity) => {
                    return (
                        <li key={activity.id}
                            onClick={removeActivity(activity.id)}>
                            {activity.name}
                        </li>
                    );
                })}
            </ul>
            <h3>Events</h3>
            <ul>
                {events.map((event) => {
                    return (
                        <li key={event.id}
                            onClick={removeEvent(event.id)}>
                            {formatDate(event.date)} - {getActivity(event.activityId).name}
                        </li>
                    );
                })}
            </ul>
        </>
    );
};
