import React from "react";
import {Route, Switch} from "react-router";
import { StartPage } from './containers/StartPage/StartPage';
import { TimeList } from './containers/TimeList/TimeList';

export default () => {

    const redirectMain = (nextState, replace, sb) => {
        if (nextState.location.pathname === '/') {
            replace('/time_table');
        }
        sb();
    };

    return (
        // <Route path="/" component={StartPage} onEnter={redirectMain}>
        //     <Route path="/time_table" component={TimeList}/>
        // </Route>
        <Switch>
            <Route exact path='/' component={StartPage}/>
            <Route path='/time_table' component={TimeList}/>
        </Switch>
    )
}
