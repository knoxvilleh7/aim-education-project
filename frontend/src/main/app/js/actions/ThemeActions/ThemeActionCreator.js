import * as actions from './ThemeActions';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


export const switchTheme = (dispatchAction, currentTheme) => {

    dispatchAction(actions.themeLoading());

    let themeConfig = {
        name: 'light',
        theme: getMuiTheme(lightBaseTheme)
    };

    if (currentTheme == 'light') {
        themeConfig = { name: 'dark', theme: getMuiTheme(darkBaseTheme)};
    }

    dispatchAction(actions.themeLoaded(themeConfig));

};

