import React, {Component} from "react";
import Slider from "react-slick";
import './bestfor.css';
import {
    Container,
    Row,
    Col
  } from "reactstrap";


class BestFor extends Component {
    render(){
        var settings = {
            dots: true,
            infinite:false
            };

        return(
            <Container>
            <div className="best-for" style={{textAlign:"center",
                                              fontWeight:"lighter",
                                              fontFamily: "'proxima-nova',sans-serif",
                                              color:"#0F1012"}}>
                <h3 style={{fontWeight:"lighter",
                                  fontFamily: "Comfortaa",
                                  color:"#0F1012"}}>
                  What is Connext best for?
                </h3>
            </div>
            <div className="usecase-desktop">
              <Slider {...settings}>
                  <div className="wrap" style={{width:"50%", textAlign:"center"}}>
                    <Row>
                    <Col xs="8">
                    <p style={{textAlign:"right"}}>
                    <span style={{color:"#FCA311"}} >CONTENT PAYMENTS</span>
                    <br />
                    <br />
                      By reducing your transaction costs to almost zero, 
                      Connext empowers streamers and creators to seamlessly monetize their content, 
                      no matter how low the price.
                      </p>
                      </Col>
                    <Col xs="0" style={{borderLeft:"thin solid", color:"#0F1012"}}>
                    </Col>
                      <Col xs="3">
                      pic goes here
                      </Col>
                      </Row>
                  </div>
                  <div className="wrap" style={{width:"50%", textAlign:"center"}}>
                    <Row>
                    <Col xs="8">
                    <p style={{textAlign:"right"}}>
                    <span style={{color:"#FCA311"}} >P2P MARKETPLACES</span>
                    <br />
                    <br />
                      Controlling user funds and managing payouts is risky and takes work. 
                      Connext lets you make your marketplace truly peer-to-peer, so you can 
                      focus on what really matters.
                    </p>
                      </Col>
                      <Col xs="0" style={{borderLeft:"thin solid", color:"#0F1012"}}>
                    </Col>
                      <Col xs="3">
                      pic goes here
                      </Col>
                      </Row>
                  </div>
                  <div className="wrap" style={{width:"50%", textAlign:"center"}}>
                    <Row>
                    <Col xs="8">
                    <p style={{textAlign:"right"}}>
                    <span style={{color:"#FCA311"}} >IOT INTERACTIONS</span>
                    <br />
                    <br />
                      Built from the ground up to enable automation, Connext Hubs let 
                      IoT devices interact frictionlessly, maintaining the security of 
                      your blockchain architecture. Beep boop.
                    </p>
                      </Col>
                      <Col xs="0" style={{borderLeft:"thin solid", color:"#0F1012"}}>
                    </Col>
                      <Col xs="3">
                      pic goes here
                      </Col>
                      </Row>
                  </div>
                  <div className="wrap" style={{width:"50%", textAlign:"center"}}>
                    <Row>
                    <Col xs="8">
                    <p style={{textAlign:"right"}}>
                    <span style={{color:"#FCA311"}} >DECENTRALIZED EXCHANGE</span>
                    <br />
                    <br />
                      Using a Connext Hub to clear transactions, decentralized exchanges 
                      can retain their non-custodial architecture, but enable activities 
                      like high frequency trading.
                    </p>
                      </Col>
                      <Col xs="0" style={{borderLeft:"thin solid", color:"#0F1012"}}>
                    </Col>
                      <Col xs="3">
                      pic goes here
                      </Col>
                      </Row>
                  </div>
                </Slider>
            </div>
            <Container className="usecase-mobile">
            <div className="wrap" style={{ textAlign:"center"}}>
                  <Row>
                    <Col>
                      pic goes here
                      </Col>
                    </Row>
                    <Row>
                    <Col>
                    <p style={{textAlign:"center"}}>
                    <span style={{color:"#FCA311"}} >CONTENT PAYMENTS</span>
                    <br />
                    <br />
                    By reducing your transaction costs to almost zero, 
                      Connext empowers streamers and creators to seamlessly monetize their content, 
                      no matter how low the price.
                    </p>
                      </Col>
                      </Row>
                  </div>
                  <div className="wrap" style={{textAlign:"center"}}>
                    <Row>
                    <Col>
                      pic goes here
                      </Col>
                    </Row>
                    <Row>
                    <Col>
                    <p style={{textAlign:"center"}}>
                    <span style={{color:"#FCA311"}} >P2P MARKETPLACES</span>
                    <br />
                    <br />
                      Controlling user funds and managing payouts is risky and takes work. 
                      Connext lets you make your marketplace truly peer-to-peer, so you can 
                      focus on what really matters.
                    </p>
                      </Col>
                      </Row>
                  </div>
                  <div className="wrap" style={{textAlign:"center"}}>
                  <Row>
                    <Col>
                      pic goes here
                      </Col>
                    </Row>
                    <Row>
                    <Col>
                    <p style={{textAlign:"center"}}>
                    <span style={{color:"#FCA311"}} >IOT INTERACTIONS</span>
                    <br />
                    <br />
                    Built from the ground up to enable automation, Connext Hubs let 
                      IoT devices interact frictionlessly, maintaining the security of 
                      your blockchain architecture. Beep boop.
                    </p>
                      </Col>
                      </Row>
                  </div>
                  <div className="wrap" style={{textAlign:"center"}}>
                  <Row>
                    <Col>
                      pic goes here
                      </Col>
                    </Row>
                    <Row>
                    <Col>
                    <p style={{textAlign:"center"}}>
                    <span style={{color:"#FCA311"}} >DECENTRALIZED EXCHANGE</span>
                    <br />
                    <br />
                    Using a Connext Hub to clear transactions, decentralized exchanges 
                      can retain their non-custodial architecture, but enable activities 
                      like high frequency trading.
                    </p>
                      </Col>
                      </Row>
                  </div>
            </Container>
            <div style={{marginTop:"8%", textAlign:"center"}}>
              <button  className="demo-button" outline style={{ margin:"auto"}}>
                  <a href="https://docs.connext.network" style={{textDecoration:"none",color:"inherit"}}>
                      Learn More
                  </a>
              </button>
            </div>
            </Container>
        )
    }

}

export default BestFor;