import React from 'react';
import './Input.css';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: this.props.type,
            name: this.props.name,
            value: this.props.value,
            onChange: this.props.handleChange
        }
    }

    render() {
        const { type, name, value, onChange } = this.state
        return (
            <input type={type} nane={name} value={value} onChange={onChange} />
        )
    }
}

export default Input