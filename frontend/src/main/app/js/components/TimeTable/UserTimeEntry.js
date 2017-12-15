import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import {
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

export class UserTimeEntry extends React.Component {

    render() {
        const {id, name, login, time}=this.props;
        // const deleteDepart = () => deleteDepartment(id, dispatchAction);
        // const departmentForm = `#/form/departments/edit/${id}`;
        return (
            <TableRow key={id}>
                <TableRowColumn/>
                <TableRowColumn>{name}</TableRowColumn>
                <TableRowColumn>{login}</TableRowColumn>
                <TableRowColumn>{time}</TableRowColumn>
                <TableRowColumn><RaisedButton label="Show details" primary={true}/></TableRowColumn>
            </TableRow>
        );
    }
}

UserTimeEntry.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    login: PropTypes.string,
    time: PropTypes.any
};

export default UserTimeEntry;
