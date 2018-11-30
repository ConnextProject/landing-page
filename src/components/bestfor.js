import React, {Component} from "react";
import Slider from "react-slick";
import './bestfor.css';
import {
    Container,
    Row,
    Col
  } from "reactstrap";
import icon1 from "../assets/icon1.svg";
import icon2 from "../assets/icon2.svg";
import icon3 from "../assets/icon3.svg";
import icon4 from "../assets/icon4.svg";


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
                <h1 style={{fontWeight:"lighter",
                                  fontFamily: "Comfortaa",
                                  color:"#0F1012"}}>
                  What is Connext best for?
                </h1>
            </div>
            <div className="usecase-desktop">
              <Slider {...settings}>
                  <div className="wrap" style={{width:"50%", textAlign:"center"}}>
                    <Row>
                    <Col xs="8">
                    <p style={{textAlign:"right", paddingRight:"5%"}}>
                    <h5 style={{color:"#FCA311"}} >CONTENT PAYMENTS</h5>
                      By reducing your transaction costs to almost zero, 
                      Indra empowers streamers and creators to seamlessly monetize their content, 
                      no matter how low the price.
                      </p>
                      </Col>
                    <Col className="divider" xs="0" >
                    </Col>
                      <Col xs="3">
                        <img className="icon1" src={icon1} alt="White outline of video game controller on orange circle background" />
                      </Col>
                      </Row>
                  </div>
                  <div className="wrap" style={{width:"50%", textAlign:"center"}}>
                    <Row>
                    <Col xs="8">
                    <p style={{textAlign:"right", paddingRight:"5%"}}>
                    <h5 style={{color:"#FCA311"}} >P2P MARKETPLACES</h5>
                      Controlling user funds and managing payouts is risky and takes work. 
                      Indra lets you make your marketplace truly peer-to-peer, so you can 
                      focus on what really matters.
                    </p>
                      </Col>
                      <Col className="divider" xs="0" >
                    </Col>
                      <Col xs="3">
                         <img className="icon4" src={icon4} alt="White outline of car on orange circle background" />                      
                      </Col>
                      </Row>
                  </div>
                  <div className="wrap" style={{width:"50%", textAlign:"center"}}>
                    <Row>
                    <Col xs="8">
                    <p style={{textAlign:"right", paddingRight:"5%"}}>
                    <h5 style={{color:"#FCA311"}} >MACHINE INTERACTIONS</h5>
                      Built from the ground up to enable automation, Indra lets
                      IoT devices interact frictionlessly, maintaining the security of 
                      your blockchain architecture. Beep boop.
                    </p>
                      </Col>
                      <Col className="divider" xs="0" >
                    </Col>
                      <Col xs="3">
                      <img className="icon2" src={icon2} alt="White outline of robot on orange circle background" />
                      </Col>
                      </Row>
                  </div>
                  <div className="wrap" style={{width:"60%", textAlign:"center"}}>
                    <Row>
                    <Col xs="8">
                    <p style={{textAlign:"right", paddingRight:"5%"}}>
                    <h5 style={{color:"#FCA311"}} >RECURRING PAYMENTS</h5>
                      Using Indra to clear transactions, recurring payment protocols can give users
                      immense flexibility in paying their bills.
                    </p>
                      </Col>
                      <Col className="divider" xs="0" >
                    </Col>
                      <Col xs="3">
                      <img className="icon3" src={icon3} alt="White outline of two figures exchanging money on orange circle background" />
                      </Col>
                      </Row>
                  </div>
                </Slider>
            </div>
            <Container className="usecase-mobile">
            <div className="wrap" style={{ textAlign:"center"}}>
                  <Row>
                    <Col>
                    <img className="icon1m" src={icon1} alt="White outline of video game controller on orange circle background" />
                      </Col>
                    </Row>
                    <Row>
                    <Col>
                    <p style={{textAlign:"center"}}>
                    <h5 style={{color:"#FCA311"}} >CONTENT PAYMENTS</h5>
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
                    <img className="icon4m" src={icon4} alt="White outline of car on orange circle background" />  
                      </Col>
                    </Row>
                    <Row>
                    <Col>
                    <p style={{textAlign:"center"}}>
                    <h5 style={{color:"#FCA311"}} >P2P MARKETPLACES</h5>
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
                    <img className="icon2m" src={icon2} alt="White outline of robot on orange circle background" />  
                      </Col>
                    </Row>
                    <Row>
                    <Col>
                    <p style={{textAlign:"center"}}>
                    <h5 style={{color:"#FCA311"}} >MACHINE PAYMENTS</h5>
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
                    <img className="icon3m" src={icon3} alt="White outline of two figures exchanging money on orange circle background" />  
                      </Col>
                    </Row>
                    <Row>
                    <Col>
                    <p style={{textAlign:"center"}}>
                    <h5 style={{color:"#FCA311"}} >RECURRING PAYMENTS</h5>
                    <br />
                    Using Indra to clear transactions, recurring payment protocols can give users
                      immense flexibility in paying their bills.
                    </p>
                      </Col>
                      </Row>
                  </div>
            <div className="learn-more-mobile" style={{}}>
              <button  className="demo-button" outline style={{ margin:"auto"}}>
                  <a href="https://docs.connext.network" style={{textDecoration:"none",color:"inherit"}}>
                      Learn More
                  </a>
              </button>
            </div>
            </Container>
            {/* <div className="learn-more" style={{}}>
              <button  className="demo-button" outline style={{ margin:"auto"}}>
                  <a href="https://docs.connext.network" style={{textDecoration:"none",color:"inherit"}}>
                      Learn More
                  </a>
              </button>
            </div> */}
            </Container>
        )
    }

}

export default BestFor;