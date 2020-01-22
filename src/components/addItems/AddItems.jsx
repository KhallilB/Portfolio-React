import React from 'react';
import Input from '../utils/input/Input';
import './AddItems.css';

class AddItems extends React.Component {
    constructor() {
        super();
        this.state = {
            projectName: '',
            description: '',
            repository: '',
            url: '',
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    render() {
        const { projectName, description, repository, url } = this.state
        return (
            <div className="form_container">
                <form>
                    <Input type={"text"} name={"project_name"} value={projectName} placeholder={"Project Name"} onChange={this.handleChange} />
                    <Input type={"text"} name={"description"} value={description} placeholder={"Description"} onChange={this.handleChange} />
                    <Input type={"url"} name={"repository"} value={repository} placeholder={"Repository"} onChange={this.handleChange} />
                    <Input type={"url"} name={"url"} value={url} placeholder={"Live Link"} onChange={this.handleChange} />
                </form>
            </div>
        )
    }
}

export default AddItems