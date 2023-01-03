import React, { Component } from 'react';
import Headers from '../layout/Headers';
import headerImg from '../images/aboutheader.png';
import { Container, Row, Col } from 'react-bootstrap';
import '../../stylesheets/AboutCss.css';
import gif2 from '../images/servicesGif2.gif';
import mission from '../images/missionIcon.png';
import vision from '../images/visionIcon.png';
import tyara from '../images/HomeGif.gif';

export default class AboutUs extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <div className="aboutheader">
          <Headers
            title={[
              'REACH YOUR CARGO IN ',
              <br className="d-none d-lg-block" />,
              'PLACES WHERE NO ONE ELSE CAN!'
            ]}
            headerImg={headerImg}
          />
        </div>

        <Container className="about-fly my-5">
          <Row>
            <Col className="aboutCol" sm={12}>
              <h6>About FLY Pyramid</h6>
              <img src={gif2} className="light2 img-fluid" alt="gif circle" />
            </Col>
          </Row>
          <Row>
            <Col
              style={{ position: 'relative' }}
              className="m-auto"
              sm={12}
              md={11}
            >
              <p>
                Established 2020, Fly Pyramid is consisted of a group aviation
                enthusiasts who have a passion to evolve the air transport field
                and to provide high standard transport services to clients
                worldwide. Our team consists of aviation experts specialized in
                every field to contribute to the success and growth in the
                Middle East, Europe, and African Continents.
              </p>
              <div className="line1 mb-5"> </div>
              {/* <div className="line2"> </div> */}
            </Col>
          </Row>
        </Container>
        <Container className="why mb-5">
          <h6 className="mt-5">WHY Fly Pyramid ?</h6>
          <Col sm={12} md={8}>
            <p>
              Our staff is well experienced and qualified, your cargo will be
              delivered safely.We will provide you with all the details required
              which will let you understand every aspect of shipping making you
              one of our partners.
            </p>
          </Col>

          <Row className="text-center m-auto pt-5">
            <Col className="text-center m-auto" sm={12} md={5}>
              <h4>MISSION</h4>
              <img
                src={mission}
                alt="mission icon"
                className="img-fluid py-4"
              />
              <p
                style={{
                  fontFamily: 'Montserrat',
                  fontStyle: 'normal',
                  fontWeight: 'normal',
                  fontSize: '17px',
                  color: '#196497'
                }}
              >
                Innovation and excellency in what we do leads us to achieve and
                sustain superior quality service to forwarders worldwide with
                maximum reliability, safety, security, and best time delivery
                creating unique value for customers, employee, owners and
                stakeholders.
              </p>
            </Col>
            <Col sm={12} md={5}>
              <h4>VISION</h4>
              <img src={vision} alt="vision icon" className="img-fluid py-4" />

              <p
                style={{
                  fontFamily: 'Montserrat',
                  fontStyle: 'normal',
                  fontWeight: 'normal',
                  fontSize: '17px',
                  color: '#196497'
                }}
              >
                Be a leading cargo carrier in the Middle East and Africa,
                contribute through facilitating import and export all types of
                products and cargos.
              </p>
            </Col>
          </Row>
        </Container>

        <div className="home-services py-4 my-5">
          <Container className="pt-3">
            <Row>
              <Col sm={12} md={6}>
                <h3>
                  We are the quick
                  <br /> Solution Makers!
                </h3>
                <p>
                  The Company’s activity is consisting of three main individual
                  cores:
                </p>
                <p style={{ fontWeight: '600' }}>
                  Air Cargo
                  <br /> Frieght forwarding
                  <br /> Business HUB
                </p>
              </Col>
              <Col
                style={{ transform: ' matrix(-1, 0, 0, 1, 0, 0)' }}
                className="pt-3"
                sm={12}
                md={6}
              >
                <img src={tyara} alt="airplane gif" />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
