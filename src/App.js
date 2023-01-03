import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import NewsSubscribe from './components/layout/NewsSubscribe';
import Footer from './components/layout/Footer';
import InquiryModal from './components/layout/InquiryModal';
import NavB from './components/layout/NavB';
import AnimatedSwitch from './components/layout/AnimatedSwitch';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false
    };
  }

  OpenModal = e => {
    this.setState({ showForm: true });
  };
  closeModal = e => {
    console.log(e)
setTimeout(() => {
  this.setState({ showForm: e });

}, 0);
  };

  render() {
    return (
      <Router>
        <div className="App">
          <NavB />
          <AnimatedSwitch /> <NewsSubscribe />
          <Footer />
          <button onClick={this.OpenModal} className="inquiryBtn">
            <img
              src={require('./components/images/inquiryIcon.png')}
              className="img-fluid"
              alt="inquiry Icon"
            />
          </button>
          <InquiryModal
            show={this.state.showForm}
            closeModal={this.closeModal}
          />
        </div>
      </Router>
    );
  }
}
