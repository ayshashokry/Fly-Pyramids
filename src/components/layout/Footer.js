import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import '../../stylesheets/FooterCss.css';
export default class Footer extends Component {
  render() {
    return (
      <div style={{ marginTop: '120px' }} className="footer">
        <Container fluid>
          <div className="pt-5">
            <Row>
              <Col xl={8} sm={12} className="reachout">
                <h1>REACH OUT</h1>
                <div className="reachoutHR"></div>{' '}
                <p>
                  Lorem ipsum- - Sharq – Block 1 – Building 13 dolor sit amet -
                  consectetur <br />
                  adipiscing elit, Universal Tower – 7th floor. <br /> P.O. Box
                  23444 Safat 13095,sed do{' '}
                </p>{' '}
                <p>
                  <span className="contactstitle">T:</span>
                  <span>(+012) 2345678</span>{' '}
                </p>{' '}
                <p>
                  <span className="contactstitle">F:</span>
                  <span>(+011) 2345678</span>{' '}
                </p>{' '}
                <p>
                  <span className="contactstitle">EMAIL:</span>
                  <span>info@oticaviation.com</span>
                </p>
              </Col>{' '}
              <Col xl={4} sm={12}>
                <div className="socialicons">
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i
                      style={{
                        paddingLeft: '13px',
                        paddingRight: '13px',
                        fontSize: '15px'
                      }}
                      className="fab fa-facebook-f mx-4 "
                    ></i>
                  </a>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-instagram mx-4"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin-in mx-4"></i>
                  </a>

                  <div className="copyright">
                    <p>Copyright© OTIC Aviation 2020</p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}
