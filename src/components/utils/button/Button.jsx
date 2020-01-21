import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            link: this.props.link
        }
    }

    render() {
        return (
            <Link to={this.state.link}><button>Button</button></Link>
        )
    }
}

export default Button;