import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import '../../stylesheets/ServiceCss.css';
import img1 from '../images/AircargoImg.png';
// import img2 from '../images/charterFlight.png';
import img3 from '../images/AirMailImg.png';
import img4 from '../images/FlyClubImg.jpg';
import img5 from '../images/africaHubImg.png';

import gif1 from '../images/servicesGif1.gif';
import gif2 from '../images/servicesGif2.gif';
import Headers from '../layout/Headers';
import headerImg from '../images/servicesHeader.png';
export default class Services extends Component {
  constructor(props) {
    super(props);
    this.hub = React.createRef();

    this.cargo = React.createRef();
    this.mail = React.createRef();
    this.club = React.createRef();
  }
  componentDidMount() {
    window.scrollTo(0, 0);

    // console.log(this.props.location.state.info);
    if (!this.props.location.state) {
      window.scrollTo(0, 0);
    } else if (this.props.location.state.info === 'cargo') {
      window.scrollTo({
        top: this.cargo.current.offsetTop,
        left: 0,
        behavior: 'smooth',
      });
    } else if (this.props.location.state.info === 'hub') {
      window.scrollTo({
        top: this.hub.current.offsetTop,
        left: 0,
        behavior: 'smooth',
      });
    } else if (this.props.location.state.info === 'mail') {
      window.scrollTo({
        top: this.mail.current.offsetTop,
        left: 0,
        behavior: 'smooth',
      });
    } else if (this.props.location.state.info === 'club') {
      window.scrollTo({
        top: this.club.current.offsetTop,
        left: 0,
        behavior: 'smooth',
      });
    } else {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return (
      <div>
        <div className="servicesheader">
          <Headers
            title={[
              'WE EASE ALL',
              <br className="d-none d-lg-block" />,
              'THE DIFFICULTIES!',
            ]}
            secondtitle={[
              'We work with diverse services that enable us to customize the best fit our clients’ needs. ',
            ]}
            headerImg={headerImg}
          />
        </div>

        {/* <div className="wing-section my-5">
          <h4 style={{ color: '#196497' }}>OUR SERVICES</h4>
        </div> */}

        <div className="wing-section my-5">
          <h4 style={{ color: '#196497' }}>OUR SERVICES</h4>
        </div>

        <Container className="observe my-4">
          <h6 className="px-3">WE OBSERVE</h6>
          <p>
            During the first three years of company’s Agency activity we had
            observed very closely what was, and still happening in the aviation
            sector in the Sudan and the surrounding African Region, where
            everything was and still almost upside down as a fact that no one
            can deny.
          </p>
          <p className="txt">
            The Company’s activity is consisting of four main services :
          </p>
        </Container>

        <Container className="my-5">
          <Row>
            <Col
              ref={this.hub}
              className="pt-5 px-5 description"
              //   style={{ borderLeft: 'solid 1px black' }}
              sm={12}
              md={6}
            >
              <div className="line"> </div>
              <img src={gif1} className="light img-fluid" alt="circle gif" />
              <h6 className="title1 pt-4" style={{ color: '#196497' }}>
                Africa Hub
              </h6>
              <p style={{ color: '#196497' }} className="subtxt1">
                One of our main projects in Egypt and Africa, we established our
                HUB in Egypt with a vision to facilitate trade movements between
                African markets and other markets in ( Europe, Asia, and America
                ) to corelate African markets and foreign markets and ease goods
                movements between them, we consider this HUB is a trade
                revolution in Africa in parallel with silk road to extend it to
                whole Africa.
              </p>
              <p style={{ color: '#196497' }} className="subtxt1">
                We believe that our HUB will give chance for domestic markets in
                Africa to grow more through having our HUB as a window to export
                their products to other markets around the world moreover import
                goods from other foreign markets. With our cargo Air crafts your
                cargo is safe with us and will be delivered to any country
                around the world as our HUB is connected with our main global
                HUBS around the world, a global network makes your trade can go
                globe once you use our HUB.
              </p>
            </Col>
            <Col className="mt-5 pt-5" sm={12} md={6}>
              <div className="myoverlay4"></div>
              <Image className="img-fluid sora" src={img5} alt="africa-hub" />
            </Col>
          </Row>
          <Row></Row>
        </Container>

        <Container ref={this.cargo} className="my-5">
          <Row>
            <Col className="mt-5 pt-4" sm={12} md={6}>
              <div className="myoverlayy"></div>
              <Image className="img-fluid sora" src={img1} alt="air-cargo" />
            </Col>
            <Col
              className="pt-5 px-5 description"
              //   style={{ borderLeft: 'solid 1px black' }}
              sm={12}
              md={6}
            >
              <div className="line"> </div>
              <img src={gif2} className="light img-fluid" alt="circle gif" />
              <h6 className="title1 pt-4">Air Cargo</h6>
              <p style={{ color: '#196497' }} className="mainTitle">
                General Cargo :
              </p>
              <p className="subtxt1">
                Dedicated and experienced and highly trained staff, 24/7 Shifts
                are working, Goods transported in accordance to IATA
                regulations, Consistent handling standards worldwide with a
                global network of partners shipment tracking via our website
              </p>
              <p style={{ color: '#196497' }} className="mainTitle">
                Pharmaceutics
              </p>
              <p style={{ color: '#196497' }} className="mainTitle">
                Perishables
              </p>
              <p style={{ color: '#196497' }} className="mainTitle">
                Valuables
              </p>
              <p style={{ color: '#196497' }} className="mainTitle">
                Dangerous Goods
              </p>
            </Col>
          </Row>
        </Container>
        <Container className="my-5">
          <Row>
            <Col
              ref={this.club}
              className="pt-5 px-5 description"
              //   style={{ borderLeft: 'solid 1px black' }}
              sm={12}
              md={6}
            >
              <div className="line"> </div>
              <img src={gif1} className="light img-fluid" alt="circle gif" />
              <h6 className="title1 pt-4 pb-4" style={{ color: '#196497' }}>
                Fly Pyramid Club
              </h6>
              <Row>
                <p style={{ color: '#196497' }} className="mainTitle">
                  {' '}
                  Balloon entertainment :
                </p>
                <p style={{ color: '#196497' }} className="subtxt1">
                  enjoy the view of the pyramids above 150 meters Hight (picture
                  for balloon beside the pyramids).
                </p>
              </Row>
              <Row>
                <p style={{ color: '#196497' }} className="mainTitle">
                  {' '}
                  pilot training :
                </p>
                <p style={{ color: '#196497' }} className="subtxt1">
                  come and join us to learn how to fly, in Fly pyramid club our
                  experts will enable you to fly indecently as you always
                  dreamed, also we provide you a sport pilot license, come and
                  join us now to reach the skies. (pilot standing in front of a
                  map).
                </p>
              </Row>
              <Row>
                <p style={{ color: '#196497' }} className="mainTitle">
                  sports Aviation festivals :
                </p>
                <p style={{ color: '#196497' }} className="subtxt1">
                  stay tuned for our coming festivals and enjoy our Air sports
                  will be organized in our club.
                </p>
              </Row>
            </Col>
            <Col className="mt-5 pt-5 " sm={12} md={6}>
              <div className="myoverlayfly"></div>
              <Image className="img-fluid myflyimg " src={img4} alt="flyP-club" />
            </Col>
          </Row>
          <Row></Row>
        </Container>

        <Container ref={this.mail} className="my-5">
          <Row>
            <Col className="mt-5 pt-4" sm={12} md={6}>
              <div className="myoverlay3"></div>
              <Image className="img-fluid sora" src={img3} alt="air-mail" />
            </Col>
            <Col
              className="pt-5 px-5 description"
              //   style={{ borderLeft: 'solid 1px black' }}
              sm={12}
              md={6}
            >
              <div className="linemail"> </div>
              <img src={gif2} className="light img-fluid" alt="circle gif" />
              <h6 className="title1 pt-4" style={{ color: '#0D3D5F' }}>
                Air Mail
              </h6>
              <p style={{ color: '#196497' }} className="subtxt1">
                Broadening the scope mail delivery service, and establish
                cooperation with postal airmail organizations.{' '}
              </p>
              <p style={{ color: '#196497' }} className="subtxt1">
                {' '}
                Fly Pyramid deals with all types of airmail service worldwide.
              </p>
              <p style={{ color: '#196497' }} className="subtxt1">
                {' '}
                Insuring quality management systems during transportation
                process.
              </p>
              <p style={{ color: '#196497' }} className="subtxt1">
                {' '}
                Qualified staff.
              </p>
              <p style={{ color: '#196497' }} className="subtxt1">
                {' '}
                Special storage, offloading & handling areas.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
