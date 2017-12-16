import * as actions from '../../constants/ThemeConstants/ActionTypes';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const initialState = {theme: getMuiTheme(lightBaseTheme), themeName: 'light'};

export default function themeReducer(state = initialState, action = {}) {

    switch (action.type) {
        case actions.THEME_LOADING:
            return {
                'themeLoading': true,
            };
        case actions.THEME_LOADED:
            return {
                'themeLoading': false,
                'themeLoaded': true,
                'themeName': action.themeName,
                'theme': action.theme,
            };
        case actions.THEME_LOAD_FAILED:
            return {
                'themeLoading': false,
                'themeLoadingError': true,
            };
        default:
            return state;
    }

}

