import React, { Component } from "react";
import "./Landing.css";
import Demo from "../components/demo";
import BestFor from "../components/bestfor";
import Viable from "../components/viable";
import Explainer from "../components/billions";
import computer_header from "../assets/computer_header.svg";
var ReactRotatingText = require("react-rotating-text");

class Landing extends Component {
  render() {
    const items = [
      "dApps",
      "Wallets",
      "Marketplaces",
      "Networks",
      "Games",
      "Exchanges"
    ];

    return (
      <div className="landing-toplevel" style={{ paddingTop: "6%" }}>
        <div className="above-fold">
          <div className="headline" style={{ display: "flex", color: "#fff" }}>
            <div>
              <h1 style={{ fontFamily: "Comfortaa" }}>
                Scalable Ethereum <br className="mobile-spacer"/><ReactRotatingText items={items} />
              </h1>
              <br />
              <p
                className="tagline"
                style={{
                  fontWeight: "normal",
                  fontSize: "large",
                  color: "#FFF"
                }}
              >
                Connext is an infrastructure layer that scales the Ethereum
                blockchain. Developers that integrate support for Connext can
                enable instant, low cost Ethereum transactions in their wallets,
                browsers, and applications!
              </p>
              <br />
            </div>
            <div className="header-buttons">
              <a
                onClick="dataLayer.push({'event': 'getting-started-button-click'});"
                className="gettingstarted-button"
                href="https://docs.connext.network"
                style={{
                  fontWeight: "normal",
                  textDecoration: "none",
                  color: "#FFF"
                }}
              >
                Get started (Docs)
              </a>
              <a
                className="joincommunity-button"
                href="https://discord.gg/yKkzZZm"
                style={{
                  fontWeight: "normal",
                  textDecoration: "none",
                  color: "#002868"
                }}
              >
                Join the community
              </a>
            </div>
          </div>
          <div>
            <object
              className="computer-header"
              type="image/svg+xml"
              data={computer_header}
              alt="Connext coding header"
              style={{ width: "60%" }}
            />
          </div>
        </div>
        <div className="explainer">
          <Explainer />
        </div>
        <div className="viable">
          <Viable />
        </div>
        {/* <div className="demo">
          <Demo />
        </div> */}
        <div className="bestfor">
          <BestFor />
        </div>
        <div className="landing-cta" style={{ width:"100%",display:"flex", justifyContent:"center",textAlign: "center" }}>

          <div className="bottom-header-buttons">
            <a
              onClick="dataLayer.push({'event': 'getting-started-button-click'});"
              className="gettingstarted-button2"
              href="https://docs.connext.network"
              style={{
                fontWeight: "normal",
                textDecoration: "none",
                color: "#FFF"
              }}
            >
              Get started (Docs)
            </a>
            <a
              className="joincommunity-button2"
              href="https://discord.gg/yKkzZZm"
              style={{
                fontWeight: "normal",
                textDecoration: "none",
                color: "#002868"
              }}
            >
              Join the community
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
