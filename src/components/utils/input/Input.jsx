import React from 'react';
import './Input.css';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: this.props.type,
            name: this.props.name,
            placeholder: this.props.placeholder,
            onChange: this.props.handleChange
        }
    }


    render() {
        const { type, name, onChange, placeholder } = this.state
        return (
            <input type={type} name={name} placeholder={placeholder} onChange={onChange} />
        )
    }
}

export default Input