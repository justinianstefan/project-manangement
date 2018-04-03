import React, { Component } from 'react';
import UserForm from './components/user-form';
import UserTable from './components/user-table';
import User from '../shared/models/user-model';

import RaisedButton from 'material-ui/RaisedButton';

class UserMain extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isFormVisible: false,
            users: [
                {
                    id: 1,
                    name: 'Mihai'
                },
                {
                    id: 2,
                    name: 'Cristian'
                },
                {
                    id: 3,
                    name: 'Eugen'
                }
            ].map(user => new User(user))
        }
        this.toggleUserForm = this.toggleUserForm.bind(this);
        this.onCreateUser = this.onCreateUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }

    onCreateUser(newUser) {
        console.log('onCreateUser::', newUser);
        const users = this.state.users;
        newUser.id = new Date().getTime();
        users.push(Object.assign({}, newUser));
        const newState = Object.assign(this.state, { users: users });
        this.setState(newState);
        console.log('onCreateUser::', this.state.users);
    }

    deleteUser(userId) {
        const users = this.state.users;
        const deleteIndex = users.findIndex(user => user.id = userId);
        users.splice(deleteIndex, 1);

        const newState = Object.assign(this.state, { users: users });
        this.setState(newState);
    }

    toggleUserForm() {
        console.log('App::toggleUserForm');
        this.setState({ isFormVisible: !this.state.isFormVisible });
    }

    render() {
        const userFormVisible = this.state.isFormVisible;

        const RaisedButtonStyle = {
            margin: 12,
        };

        return (
            <div className="user-main">
                <RaisedButton
                    label="Toggle Users Form"
                    secondary={true}
                    style={RaisedButtonStyle}
                    onClick={this.toggleIssueForm} />
                <h2>Users:</h2>
                <UserForm isVisible={this.userFormVisible} onCreateUser={this.onCreateUser} />
                <UserTable users={this.state.users} onDeleteUser={this.deleteUser} />
            </div>
        )
    }
}

export default UserMain;