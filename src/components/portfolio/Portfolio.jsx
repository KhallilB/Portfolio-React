import React from 'react';
import './Portfolio.css';
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
                <h1>All Projects</h1>
                <div className="protfolio_divider" />
                {projects.map((project, index) => {
                    return (
                        <div key={index} className="project_container">
                            <div className="project_left">
                                <img src={project.project_img} alt="#" />
                            </div>
                            <div className="project_right">
                                <h1>{project.title}</h1>
                                <div className="line" id="project_divider" />
                                <h4>{project.description}</h4>
                                <li>
                                    {project.tags.map((tags, index) => {
                                        return (
                                            <div className="project_tags" index={index}><p>{tags}</p></div>
                                        )
                                    })}
                                </li>

                                <div className="link_button_group">
                                    <a href={project.live_link} target="_blank" rel="noopener noreferrer"><button> Live Project</button></a>
                                    <a href={project.github_link} target="_blank" rel="noopener noreferrer"><button>Github</button></a>
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