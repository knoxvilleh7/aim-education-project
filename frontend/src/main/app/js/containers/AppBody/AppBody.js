import React from 'react';
import { Route } from 'react-router-dom';
import { StartPage } from '../StartPage/StartPage';
import { TimeList } from '../TimeList/TimeList';

export class AppBody extends React.Component {

    render() {
        return(
            <div>
                <Route exact path='/' component={ StartPage }/>
                <Route path='/time_table' component={ TimeList }/>
            </div>
        );
    }
}

export default AppBody;