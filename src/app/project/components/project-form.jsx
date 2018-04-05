import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton/RaisedButton';
import TextField from 'material-ui/TextField/TextField';
import Project from '../../shared/models/project-model';

class ProjectForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isVisible: props.isVisible,
            textFieldValue: ''
        }

        this.createProject = this.createProject.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ isVisible: nextProps.isVisible });
    }

    createProject() {
        const input = this.state.textFieldValue;
        const project = new Project({ name: input });

        this.props.onCreateProject(project);

        console.log(this.state)
    }

    handleProjectNameChange = (e) => {
        console.log(this.state.textFieldValue)

        this.setState({ textFieldValue: e.target.value })
    }

    render() {

        const formCls = this.state.isVisible ? '' : 'd-none';

        const textFieldStyle = {
            marginLeft: 20,
            border: 2,
        };
        const RaisedButtonStyle = {
            margin: 12,
        }

        const form = (
            <form className={formCls}>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput">New project name:</label>
                    <TextField
                        hintText="Please enter a name"
                        style={textFieldStyle}
                        underlineShow={false}
                        id="formGroupExampleInput"
                        value={this.state.textFieldValue}
                        onChange={this.handleProjectNameChange} />
                    <RaisedButton
                        label="Add User"
                        style={RaisedButtonStyle}
                        onClick={this.createProject} />
                </div>
            </form>
        )

        return this.state.isVisible ? form : '';
    }
}

export default ProjectForm;