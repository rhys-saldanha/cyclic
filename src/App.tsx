import React from 'react';
import {useRecoilValue} from 'recoil';
import * as state from './state/state';
import Button from '@material-ui/core/Button';

function App() {
    const activities = useRecoilValue(state.activities);

    return (
        <Button variant="contained" color="primary">
            Hello World
        </Button>
    );
}

export default App;
