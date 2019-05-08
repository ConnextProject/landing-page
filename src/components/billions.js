import React, { Component } from "react";
import "./billions.css";
import payments from "../assets/payments.svg";
import layer2 from "../assets/layer.svg";
import spank from "../assets/spank.svg";
import provide from "../assets/provide.png";
import mosendo from "../assets/mosendo.svg";
import ujo from "../assets/ujo.png";

class Explainer extends Component {
  render() {
    return (
      <div
        className="explainer"
        style={{ textAlign: "center", display: "flex", marginBottom: "10%" }}
      >
        <div className="layer" style={{ width: "50%" }}>
          <img
            src={payments}
            alt="Illustration of a blockchain (blue) with ERC20 token logos above"
            style={{ width: "250px" }}
          />
        </div>
        <div
          className="explainer1"
          style={{ textAlign: "left", marginBottom: "20%" }}
        >
        <h2
            style={{
              fontFamily: "Comfortaa",
              color: "#FCA311"
            }}
          >
            Meet Connext
          </h2>
          Connext scales Ethereum using state channels. State channels let users
          batch many Ethereum transactions into one netted transfer by sending
          signed off-blockchain commitments to counterparties rather than direct
          on-blockchain transactions. Transactions in state channels behave just
          like their Ethereum counterparts, but with dramatically less data that
          needs to end up on the blockchain itself.
          <br />
          <br />
          Connext builds state channel nodes which let anyone open channels and
          route transactions to other channels in the network - all to create to
          create one seamless experience between wallets, browsers, and
          applications that developers can offer their users.
          <br />
          <br />
          <a href="https://docs.connext.network">
            Learn more about how it works
          </a>
        </div>
        
        <div
          className="explainer2"
          style={{ marginRight: "0%", textAlign: "left" }}
        >
          <h2
            style={{
              fontFamily: "Comfortaa",
              color: "#FCA311"
            }}
          >
            Production Ready
          </h2>
          Rather than implementing from scratch, Connext builds on an ecosystem
          of standards, libraries, and best practices such as the Counterfactual
          framework, and the Dai Stablecoin. Our infrastructure also piggybacks
          on existing Ethereum development patterns, making it easy for users to
          easily access Connext anywhere they would also be interacting with the
          blockchain.
          <br />
          <br /> Put together, these choices make our technology simple to
          integrate, extensible for many use-cases, interoperable with other
          infrastructure, and ready for use in production environments. <br />
          <br />
          Check out some of the innovative projects that are using Connext live
          on the Ethereum mainnet today:
          <div className="projects">
            <a href="https://mosendo.com/">
                <img src={mosendo} alt="mosendo logo" style={{width:"100px" }} />
            </a>
            <a href="https://spankchain.com/">
            <img src={spank} alt="spank logo" style={{ width:"50px"}} />
            </a>
            <a href="https://provide.services/">
            <img src={provide} alt="provide logo" style={{width:"100px" }} />
            </a>
            <a href="https://ujomusic.com/">
            <img src={ujo} alt="ujo logo" style={{width:"100px" }} />
            </a>
          </div>
        </div>
        <div className="payments" style={{ width: "50%" }}>
          <img
            src={layer2}
            alt="Illustration of blockchain (blue) with a new 
                                            (orange) block being added"
            style={{ width: "300px" }}
          />
        </div>
      </div>
    );
  }
}

export default Explainer;
