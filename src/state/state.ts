import {atom} from 'recoil';
import {recoilPersist} from 'recoil-persist';

const {persistAtom} = recoilPersist();

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
    effects_UNSTABLE: [persistAtom]
});

const events = atom<Event[]>({
    key: 'events',
    default: [],
    effects_UNSTABLE: [persistAtom]
});

export const state = {
    activities, events
};
