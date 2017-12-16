import * as actions from './ThemeActions';
import * as themes from '../../themes/storage';


export const switchTheme = (dispatchAction, currentTheme) => {

    dispatchAction(actions.themeLoading());

    let themeConfig = {
        name: 'light',
        theme: themes.getLightTheme()
    };

    if (currentTheme == 'light') {
        themeConfig = { name: 'dark', theme: themes.getDarkTheme()};
    }

    dispatchAction(actions.themeLoaded(themeConfig));

};

