import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import { Toolbar, ToolbarGroup, ToolbarSeparator } from 'material-ui/Toolbar';
import { Link } from 'react-router-dom';

export class NavBar extends React.Component {

    render() {
        return (
            <Toolbar>
                <ToolbarGroup>
                    <div><img src='/aim1.png'/></div>
                    <ToolbarSeparator />
                    <RaisedButton label="Home" primary={true}><Link to='/' style={{display: 'block', height: '100%'}}>Home</Link></RaisedButton>
                    <ToolbarSeparator />
                    <RaisedButton primary={true}><Link to='/time_table' style={{display: 'block', height: '100%'}}>Time List</Link></RaisedButton>
                </ToolbarGroup>
                <ToolbarGroup>
                    <IconMenu
                        iconButtonElement={
                            <IconButton touch={true}>
                                <NavigationExpandMoreIcon />
                            </IconButton>
                        }
                    >
                        <MenuItem primaryText="Download"/>
                        <MenuItem primaryText="More Info"/>
                    </IconMenu>
                </ToolbarGroup>
            </Toolbar>
        );
    }
}

export default NavBar;