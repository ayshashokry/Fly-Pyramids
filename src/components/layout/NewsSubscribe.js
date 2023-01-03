import React, { Component } from 'react';
import '../../stylesheets/SubscribeCss.css';
import axios from 'axios';
import { Form, Button, FormGroup, Modal, Alert } from 'react-bootstrap';
export default class NewsSubscribe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      form: { email: '' },
      showsucc: false,
      formErrors: {
        email: null
      },
      show: false,
      showExpAlert: false
    };
  }
  closealert = e => {
    this.setState({ showExpAlert: false });
  };
  handleChange = e => {
    const { name, value } = e.target;
    const { form, formErrors } = this.state;
    let formObj = {};

    formObj = {
      ...form,
      [name]: value
    };

    this.setState({ form: formObj }, () => {
      if (!Object.keys(formErrors).includes(name)) return;
      let formErrorsObj = {};
      if (name === 'email') {
        let refValue = this.state.form[name === 'email' ? 'msg' : 'email'];
        const errorMsg = this.validateField(name, value, refValue);
        formErrorsObj = { ...formErrors, [name]: errorMsg };
      } else {
        const errorMsg = this.validateField(
          name,
          name === 'email' ? this.state.form['email'] : value
        );
        formErrorsObj = { ...formErrors, [name]: errorMsg };
      }
      this.setState({ formErrors: formErrorsObj });
    });
  };

  validateField = (name, value, refValue) => {
    let errorMsg = null;
    switch (name) {
      case 'email':
        if (!value) errorMsg = '*Email is required';
        else if (
          !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            value
          )
        )
          errorMsg = 'Please enter a valid Email.';
        break;

      default:
        break;
    }
    return errorMsg;
  };

  validateForm = (form, formErrors, validateFunc) => {
    const errorObj = {};
    Object.keys(formErrors).map(x => {
      let refValue = null;
      const msg = validateFunc(x, form[x], refValue);
      if (msg) errorObj[x] = msg;
    });
    return errorObj;
  };

  subscribe = e => {
    const { form, formErrors } = this.state;
    const errorObj = this.validateForm(form, formErrors, this.validateField);
    if (Object.keys(errorObj).length !== 0) {
      this.setState({ formErrors: { ...formErrors, ...errorObj } });
      return false;
    } else {
      const request = {
        recieverMail: 'ahmed.khaled@flypyramid.com',
        body: `A potential customer with the Email :${form.email} wishes to communicate with Fly Pyramid \n\t Sincerly, Fly Pyramid bot.`,
        subject: `Fly Pyramid-Subscription`
      };
      axios
        .post('https://power-support.lirten.com/api/sendMail/sen', request)
        .then(res => {
          if ((res.data.code = '0')) {
            setTimeout(() => {
              this.setState({ show: true, showExpAlert: false });
            }, 10).then(
              setTimeout(() => {
                this.setState({ show: false, showExpAlert: false });
              }, 3000)
            );
          }
        })
        .catch(error =>
          this.setState({
            emptyemail: '',
            show: false,
            email: '',
            showExpAlert: true
          })
        );
    }
  };

  render() {
    const { form, formErrors } = this.state;

    return (
      <div className="subscribe">
        <h3>
          LET'S STAY IN TOUCH!{' '}
          <i
            style={{ color: '#196497' }}
            className="fas fa-envelope fa-1x pl-2"
          ></i>
        </h3>
        <p>Subscribe to our mailing list to get the updates to your email</p>
        <Form>
          <div className="forminput">
            <FormGroup>
              <input
                className="email mt-2 w-25"
                id="email"
                required
                type="email"
                onChange={this.handleChange}
                value={form.email}
                name="email"
                onBlur={this.handleChange}
              />
              <label for="email">Enter Your Email Here...</label>{' '}
            </FormGroup>{' '}
            {formErrors.email && (
              <span className="inquiryerr mx-auto">{formErrors.email}</span>
            )}{' '}
          </div>

          <div className="subButton">
            <Button onClick={this.subscribe}>SUBSCRIBE</Button>
          </div>
          <Alert show={this.state.showExpAlert} variant="danger">
            {' '}
            <span className="closesubalertybtn">
              <i class="fas fa-times" onClick={this.closealert}></i>
            </span>
            <p>Server is currently down , Please try again later</p>
          </Alert>
        </Form>
        <Modal show={this.state.show}>
          <div id="snackbar">
            Thank you! You have been subscribed successfully.
          </div>
        </Modal>
      </div>
    );
  }
}
