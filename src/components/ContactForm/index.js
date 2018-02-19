import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import Recaptcha from 'react-google-invisible-recaptcha';

import styles from './contact.module.sass'

// https://nodemailer.com/about/
// https://ciunkos.com/creating-contact-forms-with-nodemailer-and-react

// http://emumba.com/blog/2016-12-07-setting-up-google-recaptcha-in-a-reactjs-app/

class Contact extends React.PureComponent {

  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateField = this.validateField.bind(this);
    this.validateForm = this.validateForm.bind(this);

    this.captchaOnLoad = this.captchaOnLoad.bind(this);
    this.captchaVerify = this.captchaVerify.bind(this);

    this.state = {
      name: '',
      email: '',
      message: '',
      nameValid: false,
      emailValid: false,
      messageValid: false,
      formValid: false,
      submitStatus: 'idle',
      showCaptcha: true,
    };
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
      return;
    }

    this.setState({
      nameValid: false,
      emailValid: false,
      messageValid: false,
      submitStatus: 'waiting'
    }, () => this.validateForm());

    setTimeout(() => {
      this.setState({ submitStatus: 'done' });
    }, 1000);
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

  captchaOnLoad() {
    console.log("captcha load");
  }

  captchaVerify() {
    console.log("captcha verify");
  }

  render() {
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

    /*
    <Recaptcha
      ref={ ref => this.recaptcha = ref }
      sitekey={process.env.GATSBY_CAPTCHA_SITE_KEY}
      onLoaded={this.captchaOnLoad}
      onResolved={this.captchaVerify}
    />
    */

    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>

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

          <div className="row">
            <div className="col-xs-12">

            </div>
          </div>

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
