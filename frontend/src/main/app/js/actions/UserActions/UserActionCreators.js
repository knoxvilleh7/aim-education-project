import agent from 'superagent';
import * as actions from './UserActions';

export const getUsers = (dispatchAction) => {

    dispatchAction(actions.userListLoading());

    agent.get('/api/allUsers').end((err, res) => {
        if (err || !res.ok) {
            dispatchAction(actions.userListLoadFailed(err));
        } else {
            dispatchAction(actions.userListLoaded(res.body));
        }
    });
};

export const wipeUsers = (dispatchAction) => {
    dispatchAction(actions.wipeUserList());
};