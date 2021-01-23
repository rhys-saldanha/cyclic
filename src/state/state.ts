import {atom} from 'recoil';

interface Activity {

}

export const activities = atom<Activity[]>({
    key: 'activities',
    default: []
});
