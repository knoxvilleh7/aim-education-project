import * as actions from '../../constants/UserConstants/ActionTypes';
import { fromJS } from 'immutable';

const initialState = fromJS({});

export default function timeListReducer(state = initialState, action = {}) {

    switch (action.type) {
        case actions.USERS_LOADING:
            return state.set('userListLoading', true);
        case actions.USERS_LOADED:
            return state
                .set('userListLoading', false)
                .set('userListLoaded', true)
                .set('userList', fromJS(action.result));
        case actions.USERS_LOAD_FAILED:
            return state
                .set('userListLoading', false)
                .set('userListLoadingError', action.error);
        case actions.USERS_WIPE:
            return state
                .set('userListLoading', false)
                .set('userListLoaded', false)
                .set('userListLoadingError', false)
                .clear('userList');
        default:
            return state;
    }

}

