import React, { Component, Button } from "react";
import { Link, Switch, Route } from "react-router-dom";
import Modal from "react-modal";
import "./styles.css";
import logoHorizontal from "../assets/logoHorizontal.png";
import logoWhiteHorizontal from "../assets/logoWhiteHorizontal.png";
import HeaderMenu from "../components/HeaderMenu";


class Home extends Component {

  render() {
    return (
        <div className="top" style={{ width:"100.5%", height: "100.5%", display: "block", overflow: "hidden" }}>
              
        <HeaderMenu/>
    

          <div
            className="footer"
            style={{
            }}
          >
            <div
              className="footer-connext"
              style={{
                fontFamily: "'proxima-nova',sans-serif",
                color: "white",
                float: "left",
                textAlign: "left",
                order: "1"
              }}
            >
              <img
                className="footer-logo"
                src={logoWhiteHorizontal}
                alt="Connext Logo Horizontal White"
                style={{ marginBottom: "-5%", width: "160px", float: "left" }}
              />
              <br />
              <br />© 2019 Connext, Inc. All rights reserved.
            </div>
            <div
              className="footer-company"
              style={{
                paddingTop:"20px",
                display:"flex",
                justifyContent:"center",
                fontFamily: "'proxima-nova',sans-serif",
                fontSize: "normal",
                color: "white",
                order: "3"
              }}
            >
            <div style={{paddingRight:"20px"}}>
              <span style={{ fontFamily: "comfortaa" }}>COMPANY</span>
              <br />
              <a
                href="mailto:support@connext.network"
                style={{
                  fontFamily: "'proxima-nova',sans-serif",
                  fontSize: "normal",
                  color: "white"
                }}
              >
                Careers
              </a>
              </div>
            
              <div>
    
              <span style={{ fontFamily: "comfortaa" }}>RESOURCES</span>
              <br />
              <a
                href="https://github.com/ConnextProject/docs/wiki"
                style={{
                  fontFamily: "'proxima-nova',sans-serif",
                  fontSize: "normal",
                  color: "white"
                }}
              >
                Docs
              </a>
              <br />
              <a
                href="https://medium.com/connext"
                style={{
                  fontFamily: "'proxima-nova',sans-serif",
                  fontSize: "normal",
                  color: "white"
                }}
              >
                Blog
              </a>
              <br />
              <a
                href="https://discord.gg/yKkzZZm"
                style={{
                  fontFamily: "'proxima-nova',sans-serif",
                  fontSize: "normal",
                  color: "white"
                }}
              >
                Chat
              </a>
              <br />
            </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Home;
