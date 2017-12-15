import React from 'react';
import { AppBody } from '../../containers/AppBody/AppBody';
import { NavBar } from '../Navigation/NavBar';

export class App extends React.Component {

    render() {
        return (
            <div>
                <NavBar/>
                <AppBody/>
            </div>
        );
    }
}