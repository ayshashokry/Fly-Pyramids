import React, { Component } from 'react';
import ReachUsHeader from '../layout/ReachUsHeader';
import { Container, Row, Col } from 'react-bootstrap';
import '../../stylesheets/ReachCss.css';
import gif2 from '../images/servicesGif2.gif';

export default class ReachUs extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <div className="reachusHeader">
          <ReachUsHeader />
        </div>

        <Container className="reach-section my-5 pt-5">
          <Row className="reachrow">
            <Col style={{ position: 'relative' }} sm={12} md={6}>
              <h5>
                Fly Right to
                <br /> Fly Pyramid Main
                <br /> Office.
              </h5>
              <img src={gif2} className="light3 img-fluid" alt="airplane gif" />
              <hr className="line3 mb-5" />
            </Col>
            <Col sm={12} md={5}>
              <p>
                Lorem ipsum- - Sharq – Block 1 – Building 13 dolor sit amet -
                consectetur adipiscing elit, Universal Tower – 7th floor. P.O.
                Box 23444 Safat 13095,sed do
              </p>
              <Row>
                <p className="px-3 infofly">T:</p>
                <p>(+011)23456789</p>
              </Row>
              <Row>
                <p className="px-3 infofly">F:</p>
                <p>(+011)23456789</p>
              </Row>
              <Row>
                <p className="px-3 infofly">E-MAIL</p>
                <p>info@oticaviation.com</p>
              </Row>
            </Col>
          </Row>
        </Container>

        <div className="  text-center mymap  mb-5 ">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.4971290992444!2d31.265093314956008!3d29.965139981911232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458392854707ed9%3A0x5e1ab449ca470260!2sThe%20Co-working%20Hub!5e0!3m2!1sen!2seg!4v1572958934930!5m2!1sen!2seg"
          />
        </div>
      </div>
    );
  }
}
