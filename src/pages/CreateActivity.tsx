import {useRecoilState} from 'recoil';
import {Activity, state} from '../state/state';
import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {onChange} from '../state/utils';
import {v4 as uuid} from 'uuid';

export const CreateActivity = () => {
    const [activities, setActivities] = useRecoilState(state.activities);
    const [activity, setActivity] = useState<Activity>({name: '', id: uuid()});
    const history = useHistory();

    const submit = () => {
        setActivities([...activities, activity]);
        history.push('/');
    };

    return (
        <>
            <h1>Create Activity</h1>

            <label>
                Name
                <input name={'name'} value={activity.name} onChange={onChange<Activity>(setActivity)}/>
            </label>
            <br/>
            {activity.name && <button onClick={submit}>Submit</button>}
        </>
    );
};
