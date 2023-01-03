import React, { Component } from 'react';
import { Container, Button, Row, Col, Image } from 'react-bootstrap';
import '../../stylesheets/HomeCss.css';
import tyara from '../images/HomeGif.gif';
import ServicesCards from '../sections/ServciesCards';
import Headers from '../layout/Headers';
import headerImg from '../images/homeheader.gif';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <div className="homeheader">
          <Headers
            hometitle={'Welcome Onboard We’re preparing for TAKING OFF!'}
            homesecondtitle={
              'FLY Pyramid ensures the best prices & on-time performance.'
            }
            homeheaderImg={headerImg}
          />
        </div>

        <div className="wing-section my-5">
          <h4>Explore FLY Pyramid</h4>
        </div>

        <Container className="who-we my-5">
          <h6 className="pb-4 pt-3"> WHO WE ARE ?</h6>
          <p>
            Established 2020, Fly Pyramid is consisted of a group aviation
            enthusiasts who have a passion to evolve the air transport field and
            to provide high standard transport services to clients worldwide.
            Our team consists of aviation experts specialized in every field to
            contribute to the success and growth in the Middle East, Europe, and
            African Continents.
          </p>
          {/* <Row className="butnRow"> */}
          <div className="butnRow">
            {' '}
            <Link to={{ pathname: '/AboutUs' }}>
              {' '}
              <Button>About Us</Button>
            </Link>
          </div>
          {/* </Row> */}
          <div className="clearfix"></div>
        </Container>

        <div className="why-choose my-5">
          <div className="over"></div>
          <Container className="pt-5">
            <h6 className="pt-5 pb-4">WHY CHOOSE US ?</h6>
            <p>
              Our staff is well experienced and qualified, your cargo will be
              delivered safely and on accurate time worldwide. We will provide
              you with all the details required which will let you understand
              every aspect of shipping making you one of our partners.
            </p>
          </Container>{' '}
          <ServicesCards />
        </div>
        <div className="home-services py-4 my-4">
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

                <Link to={{ pathname: '/services' }}>
                  {' '}
                  <Button>OUR SERVICES </Button>
                </Link>
              </Col>
              <Col
                style={{ transform: ' matrix(-1, 0, 0, 1, 0, 0)' }}
                className="pt-3"
                sm={12}
                md={6}
              >
                <Image src={tyara} alt="airplane gif" />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
