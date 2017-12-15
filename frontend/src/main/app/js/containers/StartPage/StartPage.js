import React from 'react';
import image from '../../../img/back1.png';


export class StartPage extends React.Component {

    render() {

        let pageBackground = {
            background: 'black',
            width: '100%',
            height: '905px'
        };

        return (
            <img src={image} style={ pageBackground }/>
        );
    }
}

export default StartPage;
