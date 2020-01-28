import axios from 'axios';

export default class EmailService {
    constructor() {
        this.sendEmail = this.sendEmail.bind(this);
    }

    sendEmail(firstName, lastName, email, message) {
        return axios
            .post('https://khallilb-portfolio-server.herokuapp.com/api/sendmail', {
                firstName,
                lastName,
                email,
                message
            })
            .then(res => {
                console.log(res);
                return Promise.resolve(res);
            })
            .catch(err => {
                console.log(err)
                return err
            })
    }
}