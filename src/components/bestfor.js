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
                      By reducing transaction costs to almost zero, 
                      Connext empowers creators to monetize their content, 
                      no matter how low the price.
                      </p>
                      </Col>
                    <Col className="divider" xs="0" >
                    </Col>
                      <Col className="icon-wrap" xs="3">
                        <img className="icon" src={icon1} alt="White outline of video game controller on orange circle background" />
                      </Col>
                      </Row>
                  </div>
                  <div className="wrap" style={{width:"50%", textAlign:"center"}}>
                    <Row>
                    <Col xs="8">
                    <p style={{textAlign:"right", paddingRight:"5%"}}>
                    <h5 style={{color:"#FCA311"}} >P2P MARKETPLACES</h5>
                      Controlling user funds and managing payouts is risky and takes work. 
                      Connext lets you make your marketplace truly peer-to-peer.
                    </p>
                      </Col>
                      <Col className="divider" xs="0" >
                    </Col>
                      <Col className="icon-wrap" xs="3">
                         <img className="icon" src={icon4} alt="White outline of car on orange circle background" />                      
                      </Col>
                      </Row>
                  </div>
                  <div className="wrap" style={{width:"50%", textAlign:"center"}}>
                    <Row>
                    <Col xs="8">
                    <p style={{textAlign:"right", paddingRight:"5%"}}>
                    <h5 style={{color:"#FCA311"}} >MACHINE INTERACTIONS</h5>
                      Flexible payment metadata and lightweight client code make Connext great for 
                      IoT devices. Kickstart your machine economy.
                    </p>
                      </Col>
                      <Col className="divider" xs="0" >
                    </Col>
                      <Col className="icon-wrap" xs="3">
                      <img className="icon" src={icon2} alt="White outline of robot on orange circle background" />
                      </Col>
                      </Row>
                  </div>
                  <div className="wrap" style={{width:"50%", textAlign:"center"}}>
                    <Row>
                    <Col xs="8">
                    <p style={{textAlign:"right", paddingRight:"5%"}}>
                    <h5 style={{color:"#FCA311"}} >RECURRING PAYMENTS</h5>
                      Paying gas on every transaction is silly. With Connext, 
                      recurring payments are just signed commitments that can be redeemed later.
                    </p>
                      </Col>
                      <Col className="divider" xs="0" >
                    </Col>
                      <Col className="icon-wrap" xs="3">
                      <img className="icon" src={icon3} alt="White outline of two figures exchanging money on orange circle background" />
                      </Col>
                      </Row>
                  </div>
                </Slider>
            </div>
            <Container className="usecase-mobile">
            <div className="wrap" style={{ textAlign:"center"}}>
                  <Row>
                    <Col>
                    <img className="icon-m" src={icon1} alt="White outline of video game controller on orange circle background" />
                      </Col>
                    </Row>
                    <Row>
                    <Col>
                    <p style={{textAlign:"center", paddingBottom:"16%"}}>
                    <h5 style={{color:"#FCA311"}} >CONTENT PAYMENTS</h5>
                    By reducing transaction costs to almost zero, 
                      Connext empowers creators to monetize their content, 
                      no matter how low the price.
                    </p>
                      </Col>
                      </Row>
                  </div>
                  <div className="wrap" style={{textAlign:"center"}}>
                    <Row>
                    <Col>
                    <img className="icon-m" src={icon4} alt="White outline of car on orange circle background" />  
                      </Col>
                    </Row>
                    <Row> 
                    <Col>
                    <p style={{textAlign:"center", paddingBottom:"16%"}}>
                    <h5 style={{color:"#FCA311"}} >P2P MARKETPLACES</h5>
                    Controlling user funds and managing payouts is risky and takes work. 
                      Connext lets you make your marketplace truly peer-to-peer.
                    </p>
                      </Col>
                      </Row>
                  </div>
                  <div className="wrap" style={{textAlign:"center"}}>
                  <Row>
                    <Col>
                    <img className="icon-m" src={icon2} alt="White outline of robot on orange circle background" />  
                      </Col>
                    </Row>
                    <Row>
                    <Col>
                    <p style={{textAlign:"center", paddingBottom:"16%"}}>
                    <h5 style={{color:"#FCA311"}} >MACHINE PAYMENTS</h5>
                    Flexible payment metadata and lightweight client code make Connext great for 
                      IoT devices. Kickstart your machine economy.
                    </p>
                      </Col>
                      </Row>
                  </div>
                  <div className="wrap" style={{textAlign:"center"}}>
                  <Row>
                    <Col>
                    <img className="icon-m" src={icon3} alt="White outline of two figures exchanging money on orange circle background" />  
                      </Col>
                    </Row>
                    <Row>
                    <Col>
                    <p style={{textAlign:"center", paddingBottom:"16%"}}>
                    <h5 style={{color:"#FCA311"}} >RECURRING PAYMENTS</h5>
                    Paying gas on every transaction is silly. With Connext, 
                      recurring payments are just signed commitments that can be redeemed later.
                    </p>
                      </Col>
                      </Row>
                  </div>
            <div className="learn-more-mobile" style={{}}>
              <button  className="demo-button" outline style={{ margin:"auto"}}>
                  <a href="https://github.com/ConnextProject/docs/wiki" style={{textDecoration:"none",color:"inherit"}}>
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
        )
    }

}

export default BestFor;
