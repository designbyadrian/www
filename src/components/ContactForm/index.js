import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import styles from './contact.module.sass'

class Contact extends React.PureComponent {

  constructor(props) {
    super(props)

    this.setTrap = this.setTrap.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateField = this.validateField.bind(this);
    this.validateForm = this.validateForm.bind(this);

    this.state = {
      name: '',
      email: '',
      message: '',
      bot: '',
      nameValid: false,
      emailValid: false,
      messageValid: false,
      trapValid: false,
      formValid: false,
      trap: [],
      submitStatus: 'idle',
    };
  }

  componentWillMount() {
    this.setTrap();
  }

  handleChange(e) {
    const state = {};
    const { name, value } = e.target;

    state[name] = value;

    this.setState(state, () => this.validateField(name, value));
  }

  handleSubmit(e) {
    e.preventDefault();

    if (!this.state.formValid) {
      return this.setTrap();
    }

    this.setState({
      nameValid: false,
      emailValid: false,
      messageValid: false,
      trapValid: false,
      submitStatus: 'waiting'
    }, () => this.validateForm());

    setTimeout(() => {
      this.setState({ submitStatus: 'done' });
    }, 1000);
  }

  setTrap() {
    const trap = [this.digit(), this.digit(), Math.random() > 0.5]
    this.setState({ trap });
  }

  validateField(name, value) {
    let nameValid = this.state.nameValid;
    let emailValid = this.state.emailValid;
    let messageValid = this.state.messageValid;
    let trapValid = this.state.trapValid;

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
      case 'bot':
        const robotTest = eval(`${this.state.trap[0]} ${this.state.trap[2] ? '+' : '-'} ${this.state.trap[1]}`)
        trapValid = robotTest == parseInt(value, 10);
        break;
      default:
        break;
    }

    this.setState({
      nameValid,
      emailValid,
      messageValid,
      trapValid,
    }, () => this.validateForm());
  }

  validateForm() {
    const formValid = this.state.nameValid &&
            this.state.emailValid &&
            this.state.messageValid &&
            this.state.trapValid;

    this.setState({ formValid });
  }

  digit() {
    return Math.floor(Math.random() * 10);
  }

  render() {
    const robotTest = `${this.state.trap[0]} ${this.state.trap[2] ? '+' : '-'} ${this.state.trap[1]}`

    let submitMessage = '';

    switch(this.state.submitStatus) {
      case 'waiting':
        submitMessage = (<FontAwesomeIcon icon={['fas', 'spinner']} pulse />);
        break;
      case 'done':
        submitMessage = (<span>Thank you <FontAwesomeIcon className={styles.bounceHeart} icon={['fas', 'heart']} /></span>);
        break;
      default:
        submitMessage = (<span><FontAwesomeIcon icon={['fas', 'paper-plane']} /> Send</span>);
        break;
    }

    return (
      <form onSubmit={this.handleSubmit}>

        <div className="row"><div className="col-xs-12">
          <label className="sr-only" for="name">Name</label>
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
          <label className="sr-only" for="id">Email address</label>
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
          <label className="sr-only" for="message">Your message</label>
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
        <div className="row">
          <div className="col-xs-8"><div className={styles.test} style={{ textAlign: 'right' }}>What is {robotTest}?</div></div>
          <div className="col-xs-4">
            <label className="sr-only" for="bot">Your answer</label>
            <input
              className={styles.input}
              id="bot"
              type="number"
              name="bot"
              tabIndex="4"
              value={this.state.bot}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <button type="submit" className={styles.submit} disabled={!this.state.formValid} type="submit" tabIndex="5">
              {submitMessage}
            </button>
          </div>
        </div>

      </form>
    )
  }
}

export default Contact;
