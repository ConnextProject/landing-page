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
              <h2 style={{fontFamily:"Comfortaa", fontWeight:"bold", fontSize:"36px"}}>Unlocking <br/><span style={{fontWeight:"normal"}}>the</span> micropayment<br/> economy</h2>
              <br />
              <p className="tagline" style={{fontWeight:"lighter",
                                fontSize:"16px",
                                fontFamily: "'proxima-nova',sans-serif",
                                color:"#FFF"}}>
                Connext is a state channel network that enables cheap, low latency payments on Ethereum. 
                Our open source infrastructure makes it easy for developers to build the P2P applications of the future.
              </p>
              <br />
              <div className="header-buttons">
              <a className="gettingstarted-button" href="https://docs.connext.network" style={{textDecoration:"none",color:"#FFF"}}>
                Get Started
              </a>
              <a className="joincommunity-button" href="https://discord.gg/yKkzZZm" style={{textDecoration:"none",color:"#002868"}}>
                Join the community
              </a>
              </div>
          </div>
          <div>
            <img className="computer-header" src={computer_header} alt="computer header"></img>
          </div>
        </div>
        <div style={{marginBottom: "19%"}}>
          <Explainer />
        </div>
        <div>
          <Viable />
        </div>
        <div style={{marginBottom: "18%"}}>
          <Demo />
        </div>
        <div style={{marginBottom:"24%"}}>
          <BestFor/>
        </div>
        <div style={{textAlign:"center"}}>
          <h2 style={{fontFamily:"Comfortaa", marginBottom:"5%", color:"#FFF"}}>Want to get started?</h2>
            <a className="signupnow-button" href="https://discord.gg/yKkzZZm" style={{textDecoration:"none"}}>
              Sign up now
            </a>
        </div>
      </div>
    );
  }
};

export default Landing;



