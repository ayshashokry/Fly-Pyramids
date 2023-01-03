import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import '../../stylesheets/HeadersCss.css';
export default class Headers extends Component {
  render() {
    return (
      <div style={{ overflowX: 'hidden' }}>
        <Row>
          {this.props.hometitle ? (
            <React.Fragment>
              {' '}
              <Col xl={7} lg={7} md={12}>
                <Container className="headerTexts">
                  <div className="HeaderHR"></div>
                  <h2>{this.props.hometitle}</h2>
                  <h4>{this.props.homesecondtitle} </h4>
                </Container>
              </Col>
              <Col xl={5} lg={5} md={12} className="headerimgg">
                <img
                  className="img-fluid"
                  src={this.props.homeheaderImg}
                  alt="header"
                />
              </Col>{' '}
            </React.Fragment>
          ) : (
            <React.Fragment>
              {' '}
              <Col xl={5} lg={7} md={12}>
                <Container className="headerTexts">
                  <div className="HeaderHR"></div>
                  <h2>{this.props.title}</h2>
                  <h4>{this.props.secondtitle} </h4>
                </Container>
              </Col>
              <Col xl={7} lg={5} md={12} className="headerimgg">
                <img
                  className="img-fluid"
                  src={this.props.headerImg}
                  alt="header"
                />
              </Col>
            </React.Fragment>
          )}
        </Row>
      </div>
    );
  }
}
