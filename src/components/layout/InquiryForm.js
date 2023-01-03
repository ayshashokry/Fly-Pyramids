import React, { Component } from 'react';
import { Form, Button, Modal, Alert } from 'react-bootstrap';
import '../../stylesheets/InquiryFormCss.css';
import axios from 'axios';
export default class InquiryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: { name: '', email: '', phonenumber: '', company: '', msg: '' },
      showsucc: false,
      formErrors: {
        name: null,
        email: null,
        phonenumber: null,
        company: null,
        msg: null
      },
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
      if (name === 'name' || name === 'msg') {
        let refValue = this.state.form[name === 'name' ? 'msg' : 'name'];
        const errorMsg = this.validateField(name, value, refValue);
        formErrorsObj = { ...formErrors, [name]: errorMsg };
      } else {
        const errorMsg = this.validateField(
          name,
          name === 'name' ? this.state.form['name'] : value
        );
        formErrorsObj = { ...formErrors, [name]: errorMsg };
      }
      this.setState({ formErrors: formErrorsObj });
    });
  };

  validateField = (name, value, refValue) => {
    let errorMsg = null;
    switch (name) {
      case 'name':
        if (!value) errorMsg = '*Name is required';
        else if (value.length < 3)
          errorMsg = 'Name must be at least 3 Characters';
        break;
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

  handleSubmit = () => {
    const { form, formErrors } = this.state;
    const errorObj = this.validateForm(form, formErrors, this.validateField);
    if (Object.keys(errorObj).length !== 0) {
      this.setState({ formErrors: { ...formErrors, ...errorObj } });
      return false;
    } else {
      const request = {
        recieverMail: 'ahmed.khaled@flypyramid.com',
        body: `A potential customer with the following information wishes to communicate with Fly Pyramid \n\t Name: ${form.name} \n\t Email: ${form.email}  \n\t Number: ${form.phonenumber}  \n\t Company: ${form.company}  \n\t Message: ${form.msg} \n\t Sincerly, Fly Pyramid bot`,
        subject: `Fly Pyramid-New Lead Inquire`
      };

      axios
        .post('https://power-support.lirten.com/api/sendMail/send', request)
        .then(res => {
          if ((res.data.code = '0')) {
            setTimeout(() => {
              this.setState({ showsucc: true, showExpAlert: false });
            }, 10).then(
              setTimeout(() => {
                this.setState({ showsucc: false, showExpAlert: false });
                this.props.closeModal(false);
              }, 3000)
            );
          } else {
            this.setState({
              showsucc: false,
              showExpAlert: true
            });
          }
        })
        .catch(error =>
          this.setState({
            showsucc: false,
            showExpAlert: true
          })
        );
    }
  };

  myclose = e => {
    this.props.closeModal(false);
  };
  render() {
    const { form, formErrors } = this.state;

    return (
      <div className="inquiryform">
        <span className="closeinquirybtn">
          <i class="fas fa-times" onClick={this.myclose}></i>
        </span>
        <h1>We're here to help!</h1>
        <div className="inquiryHR"></div>
        <h5>Hit us up below and we’ll get back to you.</h5>
        <Form className="inquiryForm">
          <Form.Group className="formgroupfloat">
            <Form.Control
              type="text"
              onChange={this.handleChange}
              value={form.name}
              name="name"
              className="floatcontrol"
              placeholder="Name"
              onBlur={this.handleChange}
            />
            {formErrors.name && (
              <span className="inquiryerr">{formErrors.name}</span>
            )}
          </Form.Group>
          <Form.Group className="formgroupmargin">
            <Form.Control
              noValidate
              required
              type="email"
              onChange={this.handleChange}
              value={form.email}
              name="email"
              onBlur={this.handleChange}
              placeholder="Email"
            />{' '}
            {formErrors.email && (
              <span className="inquiryerr">{formErrors.email}</span>
            )}
          </Form.Group>
          <Form.Group className="formgroupmargin">
            <Form.Control
              noValidate
              required
              onChange={this.handleChange}
              value={form.phonenumber}
              name="phonenumber"
              placeholder="Phone"
              type="number"
              onBlur={this.handleChange}
            />{' '}
          </Form.Group>

          <Form.Group className="formgroupmargin">
            <Form.Control
              noValidate
              required
              type="text"
              onChange={this.handleChange}
              value={form.company}
              name="company"
              placeholder="Company"
              onBlur={this.handleChange}
            />{' '}
          </Form.Group>
          <Form.Group className="formgroupmargin">
            <Form.Control
              noValidate
              required
              style={{ height: '150px' }}
              type="text"
              onChange={this.handleChange}
              value={form.msg}
              name="msg"
              onBlur={this.handleChange}
              placeholder="Message"
            />{' '}
          </Form.Group>
          <div className="submitBtn">
            <Button onClick={this.handleSubmit}>SUBMIT</Button>
          </div>
        </Form>{' '}
        <Alert show={this.state.showExpAlert} variant="danger">
          {' '}
          <span className="closesubalertybtn">
            <i class="fas fa-times" onClick={this.closealert}></i>
          </span>
          <p>Server is currently down , Please try again later</p>
        </Alert>
        <Modal className="mt-2 submodal" show={this.state.showsucc}>
          <div id="alertsnackbar">
            Thank You ! Your Inquiry was successfully Sent to us. We will get
            back soon to you.
          </div>
        </Modal>
      </div>
    );
  }
}
