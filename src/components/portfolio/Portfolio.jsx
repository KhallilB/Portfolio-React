import React from 'react';
import './Portfolio.scss';
import Projects from '../../projects.json';

class Portfolio extends React.Component {
    constructor() {
        super();
        this.state = {
            projects: []
        }
    }

    componentDidMount() {
        let projects = Projects.projects;
        this.setState({ projects })
    }

    render() {
        let { projects } = this.state;
        return (
            <div className="portfolio_container">
                {projects.map((project, index) => {
                    return (
                        <div className="project_container">
                            <div className="project_left">
                                <img src={project.project_img} alt="#" />
                            </div>
                            <div className="project_right">
                                <h1>{project.title}</h1>
                                <hr />
                                <h4>{project.description}</h4>
                                <li>
                                    {project.tags.map((tags, index) => {
                                        return (
                                            <span index={index}>{tags}</span>
                                        )
                                    })}
                                </li>

                                <div className="link_button_group">
                                    <a href={project.live_link} target="_blank" rel="noopener noreferrer"><button> Live Project</button></a>
                                    <button>Github</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

        )
    }
}

export default Portfolio;