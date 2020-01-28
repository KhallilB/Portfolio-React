import React from 'react';
import './Contact.css';

import EmailService from '../../services/EmailService';

class Contact extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            message: '',
            errors: ''
        }
        this.Email = new EmailService();
    }

    submitForm = event => {
        event.preventDefault();

        const { firstName, lastName, email, message } = this.state;

        this.Email.sendEmail(firstName, lastName, email, message).then(res => {
            console.log(res)
        });
    };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    render() {
        const { firstName, lastName, email, message } = this.state;

        return (
            <div className="contact_container">
                <div className="header_text">
                    <h1>Contact Me</h1>
                    <p>I'm looking forward to hearing from you.</p>
                </div>

                <div className="form_container">
                    <form onSubmit={this.submitForm}>
                        <input className="contact_input" type="text" name="firstName" placeholder="First Name" value={firstName} onChange={this.handleChange} />
                        <input className="contact_input" type="text" name="lastName" placeholder="Last Name" value={lastName} onChange={this.handleChange} />
                        <input className="contact_input" type="email" name="email" placeholder="Email" value={email} onChange={this.handleChange} />
                        <textarea className="contact_text_area" type="text" name="message" placeholder="Message" value={message} onChange={this.handleChange} />
                        <button type="submit" value="submit">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Contact;