import React from 'react';
import { Route } from 'react-router-dom';
import { StartPage } from '../StartPage/StartPage';
import { TimeList } from '../TimeList/TimeList';
import { Profile } from '../Profile/Profile';

export class AppBody extends React.Component {

    render() {
        return(
            <div style={{textAlign: 'center'}}>
                <Route exact path='/' component={ StartPage }/>
                <Route path='/time_table' component={ TimeList }/>
                <Route exact path='/profile' component={ Profile }/>
            </div>
        );
    }
}

export default AppBody;