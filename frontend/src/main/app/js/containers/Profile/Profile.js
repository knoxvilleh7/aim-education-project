import React from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

export class Profile extends React.Component {

    render() {
        return (
            <div style={{width: '500px', display: 'inline-block'}}>
                <Table>
                    <TableHeader displaySelectAll={false}>
                        <TableRow>
                            <TableHeaderColumn style={{textAlign: 'center', 'fontSize': '22px'}}>
                                Profile
                            </TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                        <TableRow key='login'>
                            <TableRowColumn>Login</TableRowColumn>
                            <TableRowColumn>test</TableRowColumn>
                        </TableRow>
                        <TableRow key='password'>
                            <TableRowColumn>Password</TableRowColumn>
                            <TableRowColumn>*****</TableRowColumn>
                        </TableRow>
                        <TableRow key='theme'>
                            <TableRowColumn>Default theme</TableRowColumn>
                            <TableRowColumn>test</TableRowColumn>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        );
    }
}

export default Profile;