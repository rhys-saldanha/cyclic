import {useSetRecoilState} from 'recoil';
import {Activity, state} from '../state/state';
import React, {useState} from 'react';
import {onChange, useSubmit} from '../state/utils';
import {v4 as uuid} from 'uuid';

export const CreateActivity = () => {
    const setActivities = useSetRecoilState(state.activities);
    const [activity, setActivity] = useState<Activity>({name: '', id: uuid()});
    const submit = useSubmit(setActivities);

    const isValid = (activity: Activity) => {
        return activity.name;
    };

    return (
        <>
            <h1>Create Activity</h1>

            <label>
                Name
                <input name={'name'} value={activity.name} onChange={onChange<Activity>(setActivity)}/>
            </label>
            <br/>
            {isValid(activity) && <button onClick={submit(activity)}>Submit</button>}
        </>
    );
};
