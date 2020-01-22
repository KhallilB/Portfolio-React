import React from 'react';

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

    render() {
        const { projectName, description, repository, url } = this.state
        return (
            <div>
                <form>
                    <input
                        type="projectName"
                        name="projectName"
                        value={projectName}
                    />
                </form>
            </div>
        )
    }
}