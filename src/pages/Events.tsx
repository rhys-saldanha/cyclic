import {useParams} from 'react-router-dom';
import {useRecoilValue} from 'recoil';
import {state} from '../state/state';
import {useGetActivity} from '../state/hooks';

interface EventsUrl {
    date: string
}

export const Events = () => {
    const {date: queryDate} = useParams<EventsUrl>();
    const events = useRecoilValue(state.events)
        .filter(({date}) => {
            return date === queryDate;
        });
    const getActivity = useGetActivity();

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
