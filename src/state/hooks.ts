import {Activity, state} from './state';
import {useRecoilValue, useSetRecoilState} from 'recoil';

export const useGetActivity = () => {
    const activities = useRecoilValue(state.activities);

    return (queryId: string): Activity => {
        return activities.find(({id}) => queryId === id) || {name: '', id: ''};
    };
};

export const useRemoveActivity = () => {
    const setActivities = useSetRecoilState(state.activities);
    const setEvents = useSetRecoilState(state.events);

    return (activityId: string) => () => {
        setActivities(activities => activities.filter(({id}) => id !== activityId));
        setEvents(events => events.filter(({activityId: eventActivityId}) => eventActivityId !== activityId));
    };
};

export const useRemoveEvent = () => {
    const setEvents = useSetRecoilState(state.events);

    return (eventId: string) => () => {
        setEvents(events => events.filter(({id}) => id !== eventId));
    };
};
