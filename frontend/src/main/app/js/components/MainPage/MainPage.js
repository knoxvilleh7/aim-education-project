import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { ConnectedRouter } from 'react-router-redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { App } from '../App/App';
import '../../../css/index.css';

@connect(
    (state) => ({
        theme: state.themeReducer.theme
    }), (dispatch) => ({
        dispatchAction: dispatch
    })
)
export class MainPage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const history = this.props.history;
        const theme = this.props.theme;
        return (
            <MuiThemeProvider muiTheme={theme}>
                <ConnectedRouter history={history}>
                    <App/>
                </ConnectedRouter>
            </MuiThemeProvider>
        );
    }
}

MainPage.propTypes = {
    theme: PropTypes.object,
    history: PropTypes.object,
    dispatchAction: PropTypes.func,
};

export default MainPage;



