import React, { Component } from 'react';
//bootstrap
import { Container, Button, Card, CardDeck } from 'react-bootstrap';
//images
import icon2 from '../images/serviceIcon2.png';
import icon1 from '../images/serviceIcon1.png';
// import icon3 from '../images/serviceIcon3.png';
import icon4 from '../images/serviceIcon4.png';
import icon5 from '../images/serviceIcon5.png';

import { Link } from 'react-router-dom';
export default class ServicesCards extends Component {
  render() {
    return (
      //   <div className="my-cards">
      <Container className="pt-5">
        <CardDeck className="px-3">
          <Card
            style={{ backgroundColor: '#1F9FD9' }}
            className=" mt-2 card1"
            sm={12}
            md={3}
          >
            <Card.Body className="p-5">
              <img className="img-fluid" src={icon1} alt="services-icon" />
              <h6 className=" py-3">Africa Hub</h6>
              <p className="">
                One of our main projects in Egypt and Africa, we established our
                HUB in Egypt with a vision to facilitate trade
              </p>
              <Button className="servButtons">
                <Link
                  style={{ color: 'black' }}
                  to={{ pathname: '/services', state: { info: 'hub' } }}
                >
                  See More <i class="fas fa-arrow-right"></i>
                </Link>
              </Button>
            </Card.Body>
          </Card>
          <Card
            style={{ backgroundColor: '#B9D8F2' }}
            className=" mt-2 card2"
            sm={12}
            md={3}
          >
            <Card.Body className="p-5">
              <Card.Text>
                <img src={icon2} alt="services-icon" />
                <h6 className="py-3">Air Cargo</h6>
                <p>
                  {' '}
                  Dedicated and experienced and highly trained staff, 24/7
                  Shifts are working, Goods transported{' '}
                </p>
                <Button className="servButtons">
                  <Link
                    style={{ color: '#057F8F' }}
                    to={{ pathname: '/services', state: { info: 'cargo' } }}
                  >
                    See More <i class="fas fa-arrow-right"></i>
                  </Link>
                </Button>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            style={{ backgroundColor: '#EABB14' }}
            className=" mt-2 card2"
            sm={12}
            md={3}
          >
            <Card.Body className="p-5">
              <Card.Text>
                <img src={icon4} alt="services-icon" />
                <h6 className="py-3">Air Mail </h6>
                <p className="">
                  Broadening the scope mail delivery service, and establish
                  cooperation with postal airmail organizations.
                </p>
                <Button className="servButtons">
                  <Link to={{ pathname: '/services', state: { info: 'mail' } }}>
                    See More <i class="fas fa-arrow-right"></i>
                  </Link>
                </Button>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            style={{ backgroundColor: '#A76CC4' }}
            className=" mt-2 card2"
            sm={12}
            md={3}
          >
            <Card.Body className="px-5 pt-5">
              <Card.Text>
                <img src={icon5} alt="services-icon" />
                <h6 className="">Fly Pyramid Club</h6>
                <p className="txt4">
                  come and join us to learn how to fly, in Fly pyramid club our
                  experts will enable you to fly indecently
                </p>
                <Button className="servButtons">
                  <Link to={{ pathname: '/services', state: { info: 'club' } }}>
                    See More <i class="fas fa-arrow-right"></i>
                  </Link>
                </Button>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
      </Container>
      //   </div>
    );
  }
}
