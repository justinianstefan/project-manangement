import React, { Component } from 'react';
import User from '../../shared/models/user-model';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class UserForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isVisible: props.isVisible,
            user: new User({ name: 'test' })
        }

        this.createUser = this.createUser.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ isVisible: nextProps.isVisible });
    }

    createUser() {
        console.log(this.state.User);
        this.props.onCreateUser(this.state.User);
    }

    handleUserNameChange = (e) => {
        const user = this.state.user;
        user.name = e.target.value;
        this.setState({ user: user });
    }


    render() {

        const textFieldStyle = {
            marginLeft: 20,
            border: 2,
        };
        const RaisedButtonStyle = {
            margin: 12,
        }


        const formCls = this.state.isVisible
            ? ''
            : 'd-none';

        const user = this.state.user;

        return (
            <div className="user-form">
                <form className={formCls}>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput">User name:</label>
                        <TextField
                            hintText="First name"
                            style={textFieldStyle}
                            underlineShow={false}
                            id="formGroupExampleInput"
                            value={user.name}
                            onChange={this.handleIssueNameChange} />
                        <RaisedButton
                            label="Add User"
                            style={RaisedButtonStyle}
                            onClick={this.createUser} />
                    </div>
                </form>
            </div>
        )
    }
}

export default UserForm;