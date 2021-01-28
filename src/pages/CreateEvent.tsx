import {useRecoilState, useRecoilValue} from 'recoil';
import {Event, state} from '../state/state';
import React, {useState} from 'react';
import {v4 as uuid} from 'uuid';
import {useHistory} from 'react-router-dom';
import {onChange} from '../state/utils';

export const CreateEvent = () => {
    const [events, setEvents] = useRecoilState(state.events);
    const [event, setEvent] = useState<Event>({
        id: uuid(),
        activityId: '',
        date: new Date().toISOString().substring(0, 10)
    });
    const activities = useRecoilValue(state.activities);
    const history = useHistory();

    const activityOptions = activities.map((activity) => {
        return <option value={activity.id}>{activity.name}</option>;
    });

    const submit = () => {
        setEvents([...events, event]);
        history.push('/');
    };

    const formatDate = (date: string) => {
        return new Date(date).toISOString().substring(0, 10);
    };

    return (
        <>
            <h1>Create Event</h1>

            <label>
                Date
                <input disabled={true} name={'date'} value={formatDate(event.date)}
                       onChange={onChange<Event>(setEvent)}/>
            </label>
            <br/>
            <label>
                Activity
                <select name={'activityId'} value={event.activityId} onChange={onChange<Event>(setEvent)}>
                    <option disabled selected value={''}> -- select an option --</option>
                    {activityOptions}
                </select>
            </label>
            <br/>

            {event.activityId && <button onClick={submit}>Submit</button>}
        </>
    );
};
