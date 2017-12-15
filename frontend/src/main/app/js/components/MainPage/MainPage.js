import React from "react";
import {Button} from "react-bootstrap";


export const MainPage = () => (

    <div className="main-page-div">
        <h1 className="welcome">Welcome to the Aimprosoft time tracking application!</h1>
        <h3 className="welcome">What would you like to do?</h3>
        <div className="main-page-buttons">
            <div className="main-page-button-dep">
                <Button bsStyle="primary">Time Table</Button>
            </div>
            <div className="main-page-button-emp">
                <Button bsStyle="warning">Track time</Button>
            </div>
        </div>
    </div>
);



