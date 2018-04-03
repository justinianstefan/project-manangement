import React, { Component } from 'react';
import User from '../../shared/models/user-model';

import RaisedButton from 'material-ui/RaisedButton';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

class UserTable extends Component {
    constructor(props) {
        super(props);

        const users = props.users.map(user => {
            return new User(user);
        })

        this.state = {
            users: users || []
        }

        this.deleteUser = this.deleteUser.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState(Object.assign(this.state, {
            isVisible: nextProps.isVisible,
            users: nextProps.users
        }));
    }

    deleteUser(userId) {
        this.props.onDeleteUser(userId);
    }

    renderUsersTableHead() {
        return (
            <TableRow>
                <TableHeaderColumn>User ID</TableHeaderColumn>
                <TableHeaderColumn>User Name</TableHeaderColumn>
                <TableHeaderColumn>Action</TableHeaderColumn>
            </TableRow>
        )
    }

    renderUsersTableBody() {

        const RaisedButtonStyle = {
            margin: 12,
        };

        return this.state.users.map(user => {
            return (
                <TableRow key={user.id}>
                    <TableRowColumn>{user.id}</TableRowColumn>
                    <TableRowColumn>{user.name}</TableRowColumn>
                    <TableRowColumn>
                        <RaisedButton
                            label="Delete"
                            secondary={true}
                            style={RaisedButtonStyle}
                            onClick={this.deleteUser} />
                    </TableRowColumn>
                </TableRow>
            )
        })
    }

    render() {
        return (
            <Table>
                <TableHeader>
                    {this.renderUsersTableHead()}
                </TableHeader>
                <TableBody>
                    {this.renderUsersTableBody()}
                </TableBody>
            </Table>
        )
    }
}

export default UserTable;