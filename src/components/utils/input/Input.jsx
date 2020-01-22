import React from 'react';
import './Input.css';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: this.props.type,
            name: this.props.name,
            value: this.props.value,
            placeholder: this.props.placeholder,
            onChange: this.props.handleChange
        }
    }


    render() {
        const { type, name, value, onChange, placeholder } = this.state
        return (
            <input type={type} name={name} value={value} placeholder={placeholder} onChange={onChange} />
        )
    }
}

export default Input