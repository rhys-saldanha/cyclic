import {useRecoilValue} from 'recoil';
import {state} from '../state/state';
import {formatDate} from '../state/utils';
import {useGetActivity, useRemoveActivity, useRemoveEvent} from '../state/hooks';

export const Calendar = () => {
    const activities = useRecoilValue(state.activities);
    const events = useRecoilValue(state.events);
    const getActivity = useGetActivity();
    const removeActivity = useRemoveActivity();
    const removeEvent = useRemoveEvent();

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
                {events
                    .map((event) => {
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
