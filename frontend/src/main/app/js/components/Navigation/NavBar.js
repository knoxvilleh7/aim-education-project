import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import { Toolbar, ToolbarGroup, ToolbarSeparator } from 'material-ui/Toolbar';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions/ThemeActions/ThemeActionCreator';
import image from '../../../img/aim1.png';


@connect(
    (state) => ({
        themeName: state.themeReducer.themeName
    }), (dispatch) => ({
        dispatchAction: dispatch
    })
)
export class NavBar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const switchTheme = () => {
            const dispatchAction = this.props.dispatchAction;
            const themeName = this.props.themeName;
            actions.switchTheme(dispatchAction, themeName);
        };

        return (
            <Toolbar>
                <ToolbarGroup>
                    <div><img src={image}/></div>
                    <ToolbarSeparator />
                    <RaisedButton primary={true}><Link to='/' style={{display: 'block', height: '100%'}}>Home</Link></RaisedButton>
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
                        <MenuItem primaryText="Switch theme" onClick={switchTheme}/>
                        <MenuItem primaryText="More Info"/>
                    </IconMenu>
                </ToolbarGroup>
            </Toolbar>
        );
    }
}

NavBar.propTypes = {
    themeName: PropTypes.string,
    dispatchAction: PropTypes.func,
};

export default NavBar;