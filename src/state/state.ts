import {atom} from 'recoil';

interface Activity {

}

export const activities = atom<Activity[]>({
    key: 'activities',
    default: [],
    // @ts-ignore
    persistence_UNSTABLE: {type: true},
});
