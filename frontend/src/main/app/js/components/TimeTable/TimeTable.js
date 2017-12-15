import React from 'react';
import PropTypes from 'prop-types';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import { UserInfoDialog } from '../UserInfo/UserInfoDialog';

export class TimeTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let rows = [];
        const {userList}=this.props;
        userList.map((user) => {
            rows.push(
                <TableRow key={user.get('id')}>
                    <TableRowColumn>{user.get('name')}</TableRowColumn>
                    <TableRowColumn>{user.get('login')}</TableRowColumn>
                    <TableRowColumn>{user.get('email')}</TableRowColumn>
                    <TableRowColumn>1</TableRowColumn>
                    <TableRowColumn><UserInfoDialog/></TableRowColumn>
                </TableRow>
            );
        });
        return (
            <Table
                height={'900px'}
                fixedHeader={true}
                fixedFooter={true}
                selectable={true}
                multiSelectable={true}
                //style={{width: '1200px'}}
            >
                <TableHeader
                    displaySelectAll={true}
                    adjustForCheckbox={true}
                    enableSelectAll={true}>
                    <TableRow>
                        <TableHeaderColumn colSpan="5" style={{textAlign: 'center', 'fontSize': '22px'}}>
                            List of tracked time
                        </TableHeaderColumn>
                    </TableRow>
                    <TableRow>
                        <TableHeaderColumn>Name</TableHeaderColumn>
                        <TableHeaderColumn tooltip="For this application">Login</TableHeaderColumn>
                        <TableHeaderColumn>E-Mail</TableHeaderColumn>
                        <TableHeaderColumn>Tracked time</TableHeaderColumn>
                        <TableHeaderColumn/>
                    </TableRow>
                </TableHeader>
                <TableBody
                    displayRowCheckbox={true}
                    deselectOnClickaway={true}
                    showRowHover={true}
                    stripedRows={true}
                >
                    {rows}
                </TableBody>
            </Table>
        );
    }
}

TimeTable.propTypes = {
    userList: PropTypes.object,
    dispatchAction: PropTypes.func,
};

export default TimeTable;

