import React from 'react';
import { AppBody } from '../../containers/AppBody/AppBody';
import { NavBar } from '../Navigation/NavBar';
import back from '../../../img/back2.jpg';

export class App extends React.Component {

    render() {
        let pageBackground = {
            width: '100%',
            height: '965px',
            backgroundImage: `url(${back})`
        };

        return (
            <div style={ pageBackground }>
                <NavBar/>
                <AppBody/>
            </div>
        );
    }
}