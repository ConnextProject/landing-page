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
              <h1 style={{fontFamily:"Comfortaa"}}>Cheaper, fairer payments</h1>
              <br />
              <p className="tagline" style={{fontWeight:"normal",
                                fontSize:"large",
                                color:"#FFF"}}> 
                Free, open source, p2p micropayment infrastructure. Built using payment channels on the Ethereum blockchain.
           
              </p>
              <br />
              <div className="header-buttons">
              <a onClick="dataLayer.push({'event': 'getting-started-button-click'});" className="gettingstarted-button" href="https://docs.connext.network" style={{fontWeight:"normal", textDecoration:"none",color:"#FFF"}}>
                Get started (Docs)
              </a>
              <a className="joincommunity-button" href="https://discord.gg/yKkzZZm" style={{fontWeight:"normal", textDecoration:"none",color:"#002868"}}>
                Join the community
              </a>
              </div>
          </div>
          <div>
            <object className="computer-header" type="image/svg+xml" data={computer_header} alt="Man sits at computer coding. Woman stands with speech bubble containing Ethereum logo"></object>
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
          <h1 style={{fontFamily:"Comfortaa", marginBottom:"4%"}}>Want to get started?</h1>
          <div className="header-buttons">
              <a onClick="dataLayer.push({'event': 'getting-started-button-click'});" className="gettingstarted-button" href="https://docs.connext.network" style={{fontWeight:"normal", textDecoration:"none",color:"#FFF"}}>
                Get started (Docs)
              </a>
              <a className="joincommunity-button" href="https://discord.gg/yKkzZZm" style={{fontWeight:"normal", textDecoration:"none",color:"#002868"}}>
                Join the community
              </a>
              </div>
        </div>
      </div>
    );
  }
};

export default Landing;



