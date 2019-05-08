import React, { Component } from "react";
import Slider from "react-slick";
import "./bestfor.css";
import { Container, Row, Col } from "reactstrap";
import icon1 from "../assets/icon1.svg";
import icon2 from "../assets/icon2.svg";
import icon3 from "../assets/icon3.svg";
import icon4 from "../assets/icon4.svg";

class BestFor extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false
    };

    return (
      <Container>
        <div
          className="best-for"
          style={{
            textAlign: "center",
            fontWeight: "lighter",
            fontFamily: "'proxima-nova',sans-serif",
            color: "#0F1012"
          }}
        >
          <h1
            style={{
              fontWeight: "lighter",
              fontFamily: "Comfortaa",
              color: "#0F1012"
            }}
          >
            Use cases
          </h1>
        </div>
        <div className="usecase-desktop">
          <Slider {...settings}>
            <div className="wrap" style={{ width: "50%", textAlign: "center" }}>
              <Row>
                <Col xs="8">
                  <h5
                    style={{
                      color: "#FCA311",
                      textAlign: "left",
                    }}
                  >
                    Instant Wallet Transfers
                  </h5>
                  <p style={{ textAlign: "left", paddingRight: "5%" }}>
                    Wallets that integrate Connext can enable unparalleled UX
                    for small to medium user payments while browsing the
                    decentralized web.
                  </p>
                </Col>
                <Col className="divider" xs="0" />
                <Col className="icon-wrap" xs="3">
                <img
                    className="icon"
                    src={icon3}
                    alt="White outline of two figures exchanging money on orange circle background"
                  />

                </Col>
              </Row>
            </div>
            <div className="wrap" style={{ width: "50%", textAlign: "center" }}>
              <Row>
                <Col xs="8">
                  <h5
                    style={{
                      color: "#FCA311",
                      textAlign: "left",
                    }}
                  >
                    Tipping and Incentivizing Content
                  </h5>

                  <p style={{ textAlign: "left", paddingRight: "5%" }}>
                    Crypto content creators such as podcasters and article
                    writers can take tiny donations or create micropaywalls for
                    their work in only a few lines of code.
                  </p>
                </Col>
                <Col className="divider" xs="0" />
                <Col className="icon-wrap" xs="3">
                <img
                    className="icon"
                    src={icon1}
                    alt="White outline of video game controller on orange circle background"
                  />
                </Col>
              </Row>
            </div>
            <div className="wrap" style={{ width: "50%", textAlign: "center" }}>
              <Row>
                <Col xs="8">
                  <h5
                    style={{
                      color: "#FCA311",
                      textAlign: "left",
                    }}
                  >
                    Streaming Payments
                  </h5>
                  <p style={{ textAlign: "left", paddingRight: "5%" }}>
                    Infrastructure service providers and content broadcasters
                    can accept continuous payment streams from users at
                    unprecedentedly low cost.
                  </p>
                </Col>
                <Col className="divider" xs="0" />
                <Col className="icon-wrap" xs="3">
                  <img
                    className="icon"
                    src={icon2}
                    alt="White outline of robot on orange circle background"
                  />
                </Col>
              </Row>
            </div>
          </Slider>
        </div>
        <Container className="usecase-mobile">
          <div className="wrap" style={{ textAlign: "center" }}>
            <Row>
              <Col>
              <img
                    className="icon-m"
                    src={icon3}
                    alt="White outline of two figures exchanging money on orange circle background"
                  />
              </Col>
            </Row>
            <Row>
            <Col>
                  <h5
                    style={{
                      color: "#FCA311",
                      textAlign: "center",
                    }}
                  >
                    Instant Wallet Transfers
                  </h5>
                  <p style={{ textAlign: "left", paddingRight: "5%" }}>
                    Wallets that integrate Connext can enable unparalleled UX
                    for small to medium user payments while browsing the
                    decentralized web.
                  </p>
                </Col>
            </Row>
          </div>
          <div className="wrap" style={{ textAlign: "center" }}>
            <Row>
              <Col>
              <img
                    className="icon-m"
                    src={icon1}
                    alt="White outline of video game controller on orange circle background"
                  />
              </Col>
            </Row>
            <Row>
            <Col>
                  <h5
                    style={{
                      color: "#FCA311",
                      textAlign: "center",
                    }}
                  >
                    Tipping and Incentivizing Content
                  </h5>

                  <p style={{ textAlign: "left", paddingRight: "5%" }}>
                    Crypto content creators such as podcasters and article
                    writers can take tiny donations or create micropaywalls for
                    their work in only a few lines of code.
                  </p>
                </Col>
            </Row>
          </div>
          <div className="wrap" style={{ textAlign: "center" }}>
            <Row>
              <Col>
              <img
                    className="icon-m"
                    src={icon2}
                    alt="White outline of robot on orange circle background"
                  />
              </Col>
            </Row>
            <Row>
            <Col>
                  <h5
                    style={{
                      color: "#FCA311",
                      textAlign: "center",
                    }}
                  >
                    Streaming Payments
                  </h5>
                  <p style={{ textAlign: "left", paddingRight: "5%" }}>
                    Infrastructure service providers and content broadcasters
                    can accept continuous payment streams from users at
                    unprecedentedly low cost.
                  </p>
                </Col>
            </Row>
          </div>

          <div className="learn-more-mobile" style={{}}>
            <button className="demo-button" style={{ margin: "auto" }}>
              <a
                href="https://github.com/ConnextProject/docs/wiki"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Learn More
              </a>
            </button>
          </div>
        </Container>
        {/* <div className="learn-more" style={{}}>
              <button  className="demo-button" outline style={{ margin:"auto"}}>
                  <a href="https://github.com/ConnextProject/docs/wiki" style={{textDecoration:"none",color:"inherit"}}>
                      Learn More
                  </a>
              </button>
            </div> */}
      </Container>
    );
  }
}

export default BestFor;
