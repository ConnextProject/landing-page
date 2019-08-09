import React, { Component } from "react";
import Landing from "../pages/Landing";
import Team from "../pages/Team";
import NotFound from "../pages/NotFound";
import { Link, Switch, Route } from "react-router-dom";
import logoHorizontal from "../assets/logoHorizontal.png";

//CONTAINS MENU AND ROUTING

class HeaderMenu extends Component {
  constructor() {
    super();
    this.state = {
      showMenu: false
    };

    this.toggleMenu = this.toggleMenu.bind(this);
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
      <div className="header-wrapper">
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
                  alignItems: "center",
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
                <li
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-evenly"
                  }}
                >
                  <a
                    href="https://medium.com/connext"
                    className="topNavLinkMobile"
                  >
                    Blog
                  </a>

                  <a
                    href="https://discord.gg/yKkzZZm"
                    className="topNavLinkMobile"
                  >
                    Chat
                  </a>
                  <a
                    onClick="dataLayer.push({'event': 'getting-started-button-click'});"
                    href="https://docs.connext.network/en/latest/background/faq.html"
                    className="topNavLinkMobile"
                  >
                    FAQ
                  </a>
                  <a
                    onClick="dataLayer.push({'event': 'getting-started-button-click'});"
                    href="https://docs.connext.network"
                    className="topNavLinkMobile"
                  >
                    Docs
                  </a>
                  <Link to="/team">About</Link>
                </li>
              </ul>
            </div>
          ) : null}
          <div style={{ width: "80%", margin: "auto", zIndex: "auto" }}>
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/team" component={Team} />
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
              <li style={{ position: "relative", left: "-10%", float: "left" }}>
                <Link to="/">
                  <img
                    className="logo1"
                    src={logoHorizontal}
                    alt="Connext Logo Horizontal"
                    style={{ width: "30%", marginTop: "2%" }}
                  />
                </Link>
              </li>
              {/* <li style={{ position: "relative", float: "right" }}>
              <Link to="/team" className="topNavLinkDesktop">
                Team
              </Link>
            </li> */}

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
              <li style={{ position: "relative", float: "right" }}>
                <a
                  onClick="dataLayer.push({'event': 'getting-started-button-click'});"
                  href="https://docs.connext.network"
                  className="topNavLinkDesktop"
                >
                  Docs
                </a>
              </li>
              <li style={{ position: "relative", float: "right" }}>
                <a
                  onClick="dataLayer.push({'event': 'getting-started-button-click'});"
                  href="https://docs.connext.network/en/latest/background/faq.html"
                  className="topNavLinkDesktop"
                >
                  FAQ
                </a>
              </li>
              <li style={{ position: "relative", float: "right" }}>
                <Link to="/team" className="topNavLinkDesktop">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div style={{ width: "84%", margin: "auto" }}>
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route path="/team" component={Team} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderMenu;
