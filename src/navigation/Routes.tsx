import {Route, Switch} from 'react-router-dom';
import {Calendar} from '../pages/Calendar';
import {CreateEvent} from '../pages/CreateEvent';
import {CreateActivity} from '../pages/CreateActivity';
import {Events} from '../pages/Events';

export const Routes = () => {
    return (
        <Switch>
            <Route exact path='/events/add'>
                <CreateEvent/>
            </Route>
            <Route path='/events/:date'>
                <Events/>
            </Route>
            <Route exact path='/activities/add'>
                <CreateActivity/>
            </Route>
            <Route exact path='/'>
                <Calendar/>
            </Route>
            <Route exact path='*'>
                <h1>Oops! This page doesn't exist</h1>
            </Route>
        </Switch>
    );
};
