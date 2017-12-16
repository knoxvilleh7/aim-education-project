import * as types from '../../constants/ThemeConstants/ActionTypes';

export const themeLoading = () => {
    return ({
        type: types.THEME_LOADING
    });
};

export const themeLoaded = (themeConfig) => {
    return ({
        type: types.THEME_LOADED,
        theme: themeConfig.theme,
        themeName: themeConfig.name
    });
};

export const themeLoadingError = () => {
    return ({
        type: types.THEME_LOAD_FAILED,
    });
};
