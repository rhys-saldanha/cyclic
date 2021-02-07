import {useRecoilValue, useSetRecoilState} from 'recoil';
import {Event, state} from '../state/state';
import React, {useState} from 'react';
import {v4 as uuid} from 'uuid';
import {onChange, useSubmit} from '../state/utils';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

export const CreateEvent = () => {
    const setEvents = useSetRecoilState(state.events);
    const [event, setEvent] = useState<Event>({
        id: uuid(),
        activityId: '',
        date: new Date().toISOString().substring(0, 10)
    });
    const activities = useRecoilValue(state.activities);
    const submit = useSubmit(setEvents);

    const activityOptions = activities.map((activity) => {
        return <option value={activity.id}>{activity.name}</option>;
    });

    const convertDate = (date: Date) => {
        return date.toISOString().substring(0, 10);
    };

    const isValid = (event: Event) => {
        return event.activityId;
    };

    const onDateChange = (date: Date) => setEvent((previous) => ({
        ...previous,
        date: convertDate(date)
    }));

    return (
        <>
            <h1>Create Event</h1>

            <label>
                Date
                <DatePicker selected={new Date(event.date)} onChange={onDateChange}/>
            </label>
            <br/>
            <label>
                Activity
                <select name={'activityId'} value={event.activityId} onChange={onChange<Event>(setEvent)}>
                    <option disabled selected value={''}>-- select an option --</option>
                    {activityOptions}
                </select>
            </label>
            <br/>
            {isValid(event) && <button onClick={submit(event)}>Submit</button>}
        </>
    );
};
