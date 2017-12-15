import React from 'react';
import { Route } from 'react-router-dom';
import { StartPage } from '../StartPage/StartPage';
import { TimeList } from '../TimeList/TimeList';

export const AppBody = () => (
    <div>
        <Route exact path='/' render={ StartPage }/>
        <Route path='/time_table' component={ TimeList }/>
    </div>
);