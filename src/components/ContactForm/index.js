import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import styles from './contact.module.sass'

class Contact extends React.PureComponent {

  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this);
    this.validateField = this.validateField.bind(this);
    this.validateForm = this.validateForm.bind(this);

    this.state = {
      name: '',
      email: '',
      message: '',
      nameValid: false,
      emailValid: false,
      messageValid: false,
      formValid: false,
      submitStatus: 'idle',
    };
  }

  handleChange(e) {
    const state = {};
    const { name, value } = e.target;

    state[name] = value;

    this.setState(state, () => this.validateField(name, value));
  }

  validateField(name, value) {
    let nameValid = this.state.nameValid;
    let emailValid = this.state.emailValid;
    let messageValid = this.state.messageValid;

    switch(name) {
      case 'name':
        nameValid = value.length > 2;
        break;
      case 'message':
        messageValid = value.length > 2;
        break;
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) !== null;
        break;
      default:
        break;
    }

    this.setState({
      nameValid,
      emailValid,
      messageValid,
    }, () => this.validateForm());
  }

  validateForm() {
    const formValid = this.state.nameValid &&
            this.state.emailValid &&
            this.state.messageValid;

    this.setState({ formValid });
  }

  render() {
    let submitMessage = '';

    switch(this.state.submitStatus) {
      case 'waiting':
        submitMessage = (<FontAwesomeIcon icon={['fas', 'spinner']} pulse />);
        break;
      case 'done':
        submitMessage = (<span>Thank you <FontAwesomeIcon icon={['fas', 'heart']} /></span>);
        break;
      default:
        submitMessage = (<span><FontAwesomeIcon icon={['fas', 'paper-plane']} /> Send</span>);
        break;
    }

    return (
      <form
        className={styles.form}
        name="contact"
        action="thank-you"
        netlify-honeypot="zip"
        netlify
      >
        <div className="row"><div className="col-xs-12">
          <label className="sr-only" htmlFor="name">Name</label>
          <input
            className={styles.input}
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            tabIndex="1"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </div></div>
        <div className="row"><div className="col-xs-12">
          <label className="sr-only" htmlFor="id">Email address</label>
          <input
            className={styles.input}
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            tabIndex="2"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </div></div>
        <div className="row"><div className="col-xs-12">
          <label className="sr-only" htmlFor="message">Your message</label>
          <textarea
            className={styles.textarea}
            id="message"
            name="message"
            rows="2"
            placeholder="Message"
            tabIndex="3"
            value={this.state.message}
            onChange={this.handleChange}
          ></textarea>
        </div></div>
        <div className={styles.hidden}><div className="col-xs-12">
          <label htmlFor="zip">Don't fill in this field</label>
          <input
            name="zip"
          />
        </div></div>
        <div className="row">
          <div className="col-xs-12">
            <button type="submit" className={styles.submit} disabled={!this.state.formValid} type="submit" tabIndex="6">
              {submitMessage}
            </button>
          </div>
        </div>

      </form>
    )
  }
}

export default Contact;
