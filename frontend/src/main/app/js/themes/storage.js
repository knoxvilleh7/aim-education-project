import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


let _colors = require('material-ui/styles/colors');

export const getLightTheme = () => {
    return getMuiTheme(lightBaseTheme);
};


export const getDarkTheme = () => {
    let theme = getMuiTheme(darkBaseTheme);
    let toolbar = theme.toolbar;
    toolbar.backgroundColor = _colors.indigo500;
    theme.toolbar = toolbar;
    return theme;
};