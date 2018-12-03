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
              <h1 style={{fontFamily:"Comfortaa", fontWeight:"bold"}}>Unlocking <br/><span style={{fontWeight:"normal"}}>the</span> micropayment<br/> economy</h1>
              <br />
              <p className="tagline" style={{fontWeight:"lighter",
                                fontFamily: "'proxima-nova',sans-serif",
                                fontSize:"x-large",
                                color:"#FFF"}}> 
                Connext is a state channel network that enables cheap, low latency payments on Ethereum. 
                Our open source infrastructure makes it easy for developers to build the P2P applications of the future.
              </p>
              <br />
              <div className="header-buttons">
              <a className="gettingstarted-button" href="https://docs.connext.network" style={{textDecoration:"none",color:"#FFF"}}>
                Read the Docs
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
          <h2 style={{fontFamily:"Comfortaa", marginBottom:"5%", color:"#FFF"}}>Want to get started?</h2>
            <a className="signupnow-button" href="https://discord.gg/yKkzZZm" style={{textDecoration:"none"}}>
              Sign up now
            </a>
            <a className="gettingstarted-button2" href="https://docs.connext.network" style={{textDecoration:"none",color:"#FFF"}}>
                Read the Docs
              </a>
        </div>
      </div>
    );
  }
};

export default Landing;



