import React from 'react';
import {useRecoilState} from 'recoil';
import * as state from './state/state';
import Button from '@material-ui/core/Button';

function App() {
    const [activities, setActivities] = useRecoilState(state.activities);

    const onClick = () => {
        setActivities([1, 2, 3]);
    };

    return (
        <>
            {activities}
            <Button variant="contained" color="primary" onClick={onClick}>
                Hello World
            </Button>
        </>
    );
}

export default App;
