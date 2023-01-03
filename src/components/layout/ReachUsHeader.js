import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import '../../stylesheets/HeadersCss.css';
export default class ReachUsHeader extends Component {
  render() {
    return (
      <div style={{ overflowX: 'hidden' }}>
        <Row>
          <Col md={8} sm={12}>
            <img
              className="img-fluid" alt="reachHeader"
              src={require('../images/reachheader.gif')}
            />
          </Col>
          <Col md={4} sm={12}>
            <Container className="reachheaderTexts">
              <div className="reachHeaderHR"></div>
              <h2>
                LET’S GET YOU
                <br /> MOVING!
              </h2>
            </Container>
          </Col>
        </Row>
      </div>
    );
  }
}
