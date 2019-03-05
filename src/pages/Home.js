import React, { Component, Button } from "react";
import { Link, Switch, Route } from "react-router-dom";
import Modal from "react-modal";
import Team from "./Team";
import Landing from "./Landing";
import NotFound from "./NotFound";
import "./styles.css";
import logoHorizontal from "../assets/logoHorizontal.png";
import logoWhiteHorizontal from "../assets/logoWhiteHorizontal.png";
import announcement_bg from "../assets/announcement_bg.png";
import DaiCard from "../assets/DaiCard.png";
import Card from "@material-ui/core/Card";

Modal.setAppElement("#root");

class Home extends Component {
  constructor() {
    super();
    this.state = {
      showMenu: false,
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  toggleMenu(event) {
    event.preventDefault();

    this.setState(prevState => ({ showMenu: !prevState.showMenu }), () => {});
  }
  // componentWillUpdate() {
  //   React.findDOMNode(this).classList.add("class1", "class2");
  // }

  componentWillUpdate() {
    document.removeEventListener("click", this.toggleMenu);
  }

  render() {
    return (
  <div>
      <div
          style={{
            height: "100%",
            display: "flex"
          }}
        >
          <img
            src={announcement_bg}
            alt="Dai Card is live!"
            style={{ height: "420px", width: "100%" }}
          />
          <div
            className="daicard-row"
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "flex-start",
              width: "100%",
              fontFamily: "comfortaa",
              flexDirection: "row",
              position: "absolute",
              top: "100px",
              paddingBottom: "3%"
            }}
          >
            <div className="daicard-col" style={{ flexGrow: 0 }}>
              <Card
                className="daicard-rectangle"
                style={{
                  backgroundColor: "#282b2e",
                  maxWidth:"420px",
                  maxHeight:"240px",
                  color: "white",
                  paddingLeft: "40px",
                  paddingTop:"12%",
                  paddingRight:"40px",
                  paddingBottom: "10%"
                }}
              >
                <h3 style={{ fontFamily: "'proxima-nova',sans-serif" }}>Introducing</h3>
                <h1 style={{color:"#FCA311"}}>The Dai Card</h1>
                <p style={{ fontFamily: "'proxima-nova',sans-serif" }}>
                  Transact instantly, cheaply, and securely in Dai
                </p>
              </Card>
            </div>

            <div className="daicard-button-col" style={{ width: "65%", justifyContent:"center" }}>
              <button className="daicard-get-started"
                style={{
                  marginTop: "10%",
                  borderRadius: "10px",
                  cursor: "pointer",
                  fontFamily: "'proxima-nova',sans-serif",
                  width: "150px",
                  height: "60px",
                  backgroundColor: "#0055bd",
                  color: "#FFF"
                }}
              >
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://daicard.io/"
                  style={{
                    backgroundColor: "inherit",
                    color: "white",
                    textDecoration: "none"
                  }}
                >
                  Get Started
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="top" style={{ display: "block", overflow: "hidden" }}>
              
          {/* <img src={background_all} alt="background" style={{position:"absolute", top:"0%", left:"0",height:"100%",width:"100%", zIndex:"-1000"}} /> */}
          <div className="baseMobile">
            <div className="header" />
            <label
              htmlFor="hamburger"
              className="sidebarIconToggle"
              onClick={this.toggleMenu}
            >
              <div
                className={
                  this.state.showMenu
                    ? "hamburger hamburger--3dy is-active"
                    : "hamburger hamburger--3dy"
                }
                style={{ position: "relative", zIndex: 1000 }}
              >
                <div className="hamburger-box" style={{ zIndex: 1000 }}>
                  <div className="hamburger-inner" style={{ zIndex: 1000 }} />
                </div>
              </div>
            </label>
            {this.state.showMenu ? (
              <div
                class={
                  this.state.showMenu ? "sidebarMenu is-active" : "sidebarMenu"
                }
                style={{ top: "0", zIndex: 2 }}
              >
                <ul
                  className="sidebarMenuInner"
                  onClick={this.toggleMenu}
                  style={{
                    position: "relative",
                    listStyleType: "none",
                    margin: "1%",
                    padding: "0",
                    overflow: "hidden",
                    textAlign: "center"
                  }}
                >
                  <li style={{ float: "left", align: "center" }}>
                    <Link to="/">
                      <img
                        src={logoHorizontal}
                        alt="Connext Logo Horizontal"
                        style={{ width: "50%" }}
                      />
                    </Link>
                  </li>
                  <li style={{ float: "right" }}>
                    <a
                      href="https://medium.com/connext"
                      className="topNavLinkMobile"
                    >
                      Blog
                    </a>
                  </li>
                  <li style={{ float: "right" }}>
                    <Link to="/team" className="topNavLinkMobile">
                      Team
                    </Link>
                  </li>
                  <li style={{ float: "right" }}>
                    <a
                      href="https://discord.gg/yKkzZZm"
                      className="topNavLinkMobile"
                    >
                      Chat
                    </a>
                  </li>
                  <li style={{ float: "right" }}>
                    <a
                      href="https://github.com/ConnextProject/docs/wiki"
                      className="topNavLinkMobile"
                    >
                      Docs
                    </a>
                  </li>
                  <li
                    style={{
                      position: "relative",
                      float: "right",
                      width: "100%"
                    }}
                  >
                    <a
                      href="https://arjun126.typeform.com/to/HroioH"
                      className="signupMobile"
                    >
                      Sign Up
                    </a>
                  </li>
                </ul>
              </div>
            ) : null}
            <div style={{ width: "80%", margin: "auto", zIndex: "auto" }}>
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/team" component={Team} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
          <div className="baseDesktop">
            <div className="header">
              <ul
                className="topnav"
                style={{
                  listStyleType: "none",
                  margin: "1%",
                  padding: "0",
                  overflow: "hidden",
                  textAlign: "center"
                }}
              >
                <li
                  style={{ position: "relative", left: "-10%", float: "left" }}
                >
                  <Link to="/">
                    <img
                      className="logo1"
                      src={logoHorizontal}
                      alt="Connext Logo Horizontal"
                      style={{ width: "30%", marginTop: "2%" }}
                    />
                  </Link>
                </li>
                {/* <li style={{position:"relative",float:'right'}}><a onClick={this.handleOpenModal} className = "signupLink">Sign Up</a></li> */}
                <li style={{ position: "relative", float: "right" }}>
                  <Link to="/team" className="topNavLinkDesktop">
                    Team
                  </Link>
                </li>
                <li style={{ position: "relative", float: "right" }}>
                  <a
                    href="https://github.com/ConnextProject/docs/wiki"
                    className="topNavLinkDesktop"
                  >
                    Docs
                  </a>
                </li>
                <li style={{ position: "relative", float: "right" }}>
                  <a
                    href="https://discord.gg/yKkzZZm"
                    className="topNavLinkDesktop"
                  >
                    Chat
                  </a>
                </li>
                <li style={{ position: "relative", float: "right" }}>
                  <a
                    href="https://medium.com/connext"
                    className="topNavLinkDesktop"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div style={{ width: "84%", margin: "auto" }}>
              {/* <div>
                <Modal className="typeform-modal" isOpen={this.state.showModal}>
                  <button className="modal-x" onClick={this.handleCloseModal}>
                    X
                  </button>
                  <iframe src="https://arjun126.typeform.com/to/HroioH" 
                        title="Typeform iFrame"
                        style={{width:"100%", 
                                height:"95%"}}></iframe>
                </Modal>
              </div> */}
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/team" component={Team} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>

          <div
            className="footer"
            style={{
              height: "auto",
              width: "100%",
              position: "relative",
              bottom: "0",
              display: "flex",
              flexDirection: "row",
              textAlign: "center",
              alignItems: "flex-start"
            }}
          >
            <div
              className="footer-connext"
              style={{
                width: "35%",
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
            <div className="spacer" style={{ width: "35%", order: "2" }} />
            <div
              className="footer-company"
              style={{
                fontFamily: "'proxima-nova',sans-serif",
                fontSize: "normal",
                color: "white",
                order: "3"
              }}
            >
              <span style={{ fontFamily: "comfortaa" }}>COMPANY</span>
              <br />
              <Link
                to="/team"
                style={{
                  fontFamily: "'proxima-nova',sans-serif",
                  fontSize: "normal",
                  color: "white"
                }}
              >
                Team
              </Link>
              <br />
              <Link
                to="/team#jobs"
                style={{
                  fontFamily: "'proxima-nova',sans-serif",
                  fontSize: "normal",
                  color: "white"
                }}
              >
                Jobs
              </Link>
            </div>
            <div
              className="footer-resources"
              style={{
                fontFamily: "'proxima-nova',sans-serif",
                fontSize: "normal",
                color: "white",
                marginLeft: "5%",
                order: "4"
              }}
            >
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
