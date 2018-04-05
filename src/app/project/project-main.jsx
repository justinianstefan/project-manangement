import React, { Component } from 'react';
import Project from '../shared/models/project-model';
import ProjectForm from './components/project-form';
import { RaisedButton } from 'material-ui';


class ProjectMain extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isFormVisible: false,
            projects: [
                {
                    id: 1,
                    name: "Project 1"
                },
                {
                    id: 2,
                    name: "Project 2"
                }
            ].map(project => new Project(project))
        }

        this.togglePRojectForm = this.togglePRojectForm.bind(this);
        this.onCreateProject = this.onCreateProject.bind(this);
    }

    onCreateProject(newProject) {
        const projects = this.state.projects;
        projects.push(newProject);

        const newState = Object.assign(this.state, { projects: projects })
        this.setState(newState)

        console.log(newState);
    }

    togglePRojectForm() {
        this.setState({ isFormVisible: !this.state.isFormVisible })

        console.log(this.state.isFormVisible)
    }

    render() {
        const projetFormVisible = this.state.isFormVisible;

        return (
            <div className="project-main">
                <h2>Projects'</h2>
                <RaisedButton
                    label="Toggle project form"
                    onClick={this.togglePRojectForm}
                />
                <ProjectForm isVisible={projetFormVisible} onCreateProject={this.onCreateProject} />

                {this.state.projects.map(project => {
                    return (<div key={project.name}>{project.name}</div>)
                })}
            </div>
        )
    }
}

export default ProjectMain;