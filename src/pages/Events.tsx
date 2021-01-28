import {useParams} from 'react-router-dom';
import {useRecoilValue} from 'recoil';
import {Activity, state} from '../state/state';

interface EventsUrl {
    date: string
}

export const Events = () => {
    const {date: queryDate} = useParams<EventsUrl>();
    const activities = useRecoilValue(state.activities);

    const getActivity = (queryId: string): Activity => {
        return activities.find(({id}) => queryId === id) || {name: '', id: ''};
    };

    const events = useRecoilValue(state.events)
        .filter(({date}) => {
            return date === queryDate;
        });

    return (
        <>
            <h1>Events</h1>
            Queried time: {new Date(queryDate).toDateString()}
            <br/>
            <h3>Events</h3>
            <ul>
                {events.map((event) => {
                    return (
                        <li key={event.id}
                        >
                            {getActivity(event.activityId).name}
                        </li>
                    );
                })}
            </ul>
        </>
    );
};
