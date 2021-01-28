import {atom} from 'recoil';

export interface Activity {
    id: string
    name: string
}

export interface Event {
    id: string
    activityId: string
    date: string
}

const activities = atom<Activity[]>({
    key: 'activities',
    default: [],
    // @ts-ignore
    persistence_UNSTABLE: {type: true},
});

const events = atom<Event[]>({
    key: 'events',
    default: [],
    // @ts-ignore
    persistence_UNSTABLE: {type: true},
});

export const state = {
    activities, events
};
