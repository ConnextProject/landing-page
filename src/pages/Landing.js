import React, {Component} from "react";
import './Landing.css';
import Demo from "../components/demo";
import BestFor from "../components/bestfor";
import Viable from "../components/viable";
import Explainer from "../components/billions";
import computer_header from "../assets/computer_header.svg";

class Landing extends Component {

  render() {
      
    return (
      <div className="landing-toplevel" style={{paddingTop:"6%"}}>
        <div className="above-fold" style={{display:"flex"}}>
          <div className="headline" style={{color:"#fff"}}>
              <h1 style={{fontFamily:"Comfortaa", fontWeight:"bold"}}>Cheaper, fairer payments</h1>
              <br />
              <p className="tagline" style={{fontWeight:"lighter",
                                fontFamily: "'proxima-nova',sans-serif",
                                fontSize:"x-large",
                                color:"#FFF"}}> 
                Free, open source, p2p micropayment infrastructure. Built using payment channels on the Ethereum blockchain.
           
              </p>
              <br />
              <div className="header-buttons">
              <a className="gettingstarted-button" href="https://docs.connext.network" style={{textDecoration:"none",color:"#FFF"}}>
                Read the docs
              </a>
              <a className="joincommunity-button" href="https://discord.gg/yKkzZZm" style={{textDecoration:"none",color:"#002868"}}>
                Join the community
              </a>
              </div>
          </div>
          <div>
            <img className="computer-header" src={computer_header} alt="Man sits at computer coding. Woman stands with speech bubble containing Ethereum logo"></img>
          </div>
        </div>
        <div className="explainer">
          <Explainer />
        </div>
        <div className="viable">
          <Viable />
        </div>
        <div className="demo" >
          <Demo />
        </div>
        <div className="bestfor">
          <BestFor/>
        </div>
        <div className="landing-cta" style={{textAlign:"center"}}>
          <h2 style={{fontFamily:"Comfortaa", color:"#FFF", marginBottom:"3%"}}>Want to get started?</h2>
            <a className="signupnow-button" href="https://discord.gg/yKkzZZm" style={{textDecoration:"none"}}>
              Join the community
            </a>
            <a className="gettingstarted-button2" href="https://docs.connext.network" style={{textDecoration:"none",color:"#FFF"}}>
                Read the docs
              </a>
        </div>
      </div>
    );
  }
};

export default Landing;



