import React from 'react';
import { Route, PrivateRoute } from 'react-router-dom';
import { StartPage } from '../StartPage/StartPage';
import { Login } from '../StartPage/Login';
import { TimeList } from '../TimeList/TimeList';
import { Profile } from '../Profile/Profile';

export class AppBody extends React.Component {

    render() {
        return(
            <div style={{textAlign: 'center'}}>
                <Route exact path='/' component={ StartPage }/>
                <Route path='/login' component={ Login }/>
                <PrivateRoute path='/time_table' component={ TimeList }/>
                <Route exact path='/profile' component={ Profile }/>
            </div>
        );
    }
}

export default AppBody;