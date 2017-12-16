import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions/UserActions/UserActionCreators';
import { TimeTable } from '../../components/TimeTable/TimeTable';

@connect(
    (state) => ({
        userList: state.timeListReducer.get('userList')
    }), (dispatch) => ({
        dispatchAction: dispatch
    })
)
export class TimeList extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const { dispatchAction }=this.props;
        actions.getUsers(dispatchAction);
    }

    componentWillUnmount() {
        const dispatchAction = this.props.dispatchAction;
        actions.wipeUsers(dispatchAction);
    }

    render() {
        const { userList, dispatchAction } = this.props;
        if (!userList) {
            return null;
        }
        return (
            <div style={{width: '1300px', display: 'inline-block'}}>
                <TimeTable userList={userList} dispatchAction={dispatchAction}/>
            </div>
        );
    }
}

TimeList.propTypes = {
    userList: PropTypes.object,
    dispatchAction: PropTypes.func,
};

export default TimeList;