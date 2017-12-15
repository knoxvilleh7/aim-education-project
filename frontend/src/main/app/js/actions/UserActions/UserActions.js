import * as types from '../../constants/UserConstants/ActionTypes';

export const userListLoading = () => {
    return ({
        type: types.USERS_LOADING
    });
};

export const userListLoaded = (res) => {
    return ({
        type: types.USERS_LOADED,
        result: res
    });
};

export const userListLoadFailed = (err) => {
    return ({
        type: types.USERS_LOAD_FAILED,
        result: err
    });
};

export const wipeUserList = () => {
    return ({
        type: types.USERS_WIPE
    });
};