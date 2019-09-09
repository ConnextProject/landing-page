import React, { Component } from "react";
import "./team.css";
import arjun from "../assets/arjun.png";
import layne from "../assets/layne.jpeg";
import rahul from "../assets/rahul.png";
import hunter from "../assets/hunter.png";
import spank from "../assets/spank.png";
import montavista from "../assets/montavista.jpeg";
import kenetic from "../assets/kenetic.png";
import hashed from "../assets/hashed.png";
import genesisblock from "../assets/genesisblock.svg";
import ethereum from "../assets/ethereum.png";
import kr1 from "../assets/kr1.png";

class Team extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  scrollToMyRef = () => {
    window.scrollTo({
      top: this.myRef.current.offsetTop,
      behavior: "smooth"
    });
  };

  render() {
    return (
      <div
        className="team-toplevel"
        style={{ width: "100%", paddingTop: "3%" }}
      >
        <div
          className="team-header"
          style={{ textAlign: "center", margin: "auto", color: "white" }}
        >
          <p
            style={{
              fontFamily: "Comfortaa",
              fontSize: 40,
              color: "#C1C6CE",
              fontWeight: "500"
            }}
          >
            About Us
          </p>
        </div>
        <div
          className="bio-container"
          style={{ display: "flex", width: "100%" }}
        >
          <div className="row">
            <div
              className="jobs"
              name="jobs"
              style={{
                width: "100%",
                paddingBottom: "4%",
                fontWeight: "lighter",
                fontFamily: "'proxima-nova',sans-serif",
                color: "#0F1012",
                verticalAlign: "middle",
                fontStyle: "italic",
                margin: "auto",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <p
                style={{
                  textAlign: "left",
                  paddingLeft: "10%",
                  width: "100%",
                  paddingRight: "10%"
                }}
              >
                Connext is a diverse team of developers, systems architects, and
                all-around nerds. We bring expertise from economic consulting,
                finance, and leading technology companies. If you think you've
                got what it takes to join us, reach out to
                support(at)connext.network and tell us why!
              </p>
            </div>
          </div>
          <div
            className="row"
            style={{
              width: "100%",
              paddingLeft: "10%",
              paddingBottom: "5%",
              justifyContent: "space-evenly"
            }}
          >
            <div className="col">
              <div className="bio-pic" style={{ justifyContent: "center" }}>
                <img
                  src={arjun}
                  alt="Arjun bitmoji - signpost labeled 'it me' points to brown-haired man"
                  style={{
                    width: "110px",
                    border: "5px solid #fff",
                    borderRadius: "20px",
                    boxShadow:
                      "1px 2px 4px 0 rgba(0, 0, 0, 0.2), 1px 6px 20px 0 rgba(0, 0, 0, 0.19)"
                  }}
                />
              </div>
              <div
                className="bio-name"
                style={{
                  fontWeight: "lighter",
                  fontFamily: "'proxima-nova',sans-serif",
                  color: "#0F1012",
                  display: "inline-block",
                  verticalAlign: "middle"
                }}
              >
                <span style={{ fontSize: "x-large" }}>Arjun Bhuptani</span>
                <br />
                <span style={{ fontStyle: "italic" }}>CEO</span>
              </div>
            </div>
            {/* <div
            className="bio-bio"
            style={{
              fontWeight: "lighter",
              fontFamily: "'proxima-nova',sans-serif",
              color: "#0F1012",
              display: "inline-block",
              verticalAlign: "middle"
            }}
          >
            Physicist turned smart contract developer and systems architect.
            Game theory nerd, dad joke enthusiast, and occasional sleeper.
          </div> */}
            <div className="col">
              <div className="bio-pic" sm={{ size: "1", offset: 1 }}>
                <img
                  src={layne}
                  alt="Layne bitmoji - blonde woman standing next to cardboard box on conveyer belt, saying 'ship it'"
                  style={{
                    width: "110px",
                    border: "5px solid #fff",
                    borderRadius: "20px",
                    boxShadow:
                      "1px 2px 4px 0 rgba(0, 0, 0, 0.2), 1px 6px 20px 0 rgba(0, 0, 0, 0.19)"
                  }}
                />
              </div>
              <div
                className="bio-name"
                style={{
                  fontWeight: "lighter",
                  fontFamily: "'proxima-nova',sans-serif",
                  color: "#0F1012",
                  display: "inline-block",
                  verticalAlign: "middle"
                }}
              >
                <span style={{ fontSize: "x-large" }}>Layne Haber</span>
                <br />
                <span style={{ fontStyle: "italic" }}>COO</span>
              </div>
              {/* <div
            className="bio-bio"
            style={{
              fontWeight: "lighter",
              fontFamily: "'proxima-nova',sans-serif",
              color: "#0F1012",
              display: "inline-block",
              verticalAlign: "middle"
            }}
          >
            Operations and Web3 engineering. Currently busy skiing, cooking, and
            exploring rabbit holes. Pre-crypto: healthcare, venture banking, and
            bioengineering.
          </div> */}
            </div>
            <div className="col">
              <div className="bio-pic" sm={{ size: "1", offset: 1 }}>
                <img
                  src={rahul}
                  alt="Rahul bitmoji - brown-haired man with light bulb above his head"
                  style={{
                    width: "110px",
                    border: "5px solid #fff",
                    borderRadius: "20px",
                    boxShadow:
                      "1px 2px 4px 0 rgba(0, 0, 0, 0.2), 1px 6px 20px 0 rgba(0, 0, 0, 0.19)"
                  }}
                />
              </div>
              <div
                className="bio-name"
                style={{
                  fontWeight: "lighter",
                  fontFamily: "'proxima-nova',sans-serif",
                  color: "#0F1012",
                  display: "inline-block",
                  verticalAlign: "middle"
                }}
              >
                <span style={{ fontSize: "x-large" }}>Rahul Sethuram</span>
                <br />
                <span style={{ fontStyle: "italic" }}>CTO</span>
              </div>
              {/* <div
            className="bio-bio"
            style={{
              fontWeight: "lighter",
              fontFamily: "'proxima-nova',sans-serif",
              color: "#0F1012",
              display: "inline-block",
              verticalAlign: "middle"
            }}
          >
            Full-stack developer, serial entrepreneur, investor, fan of
            blockchains. Jiu-jitsu, yoga, and snowboarding enthusiast. Formerly
            an electrical engineer at Tesla.
          </div> */}
            </div>
            <div className="col">
              <div className="bio-pic" sm={{ size: "1", offset: 1 }}>
                <img
                  src={hunter}
                  alt="Hunter bitmoji - blonde-haired man carrying cup of coffee and whistling"
                  style={{
                    width: "110px",
                    border: "5px solid #fff",
                    backgroundColor: "white",
                    borderRadius: "20px",
                    boxShadow:
                      "1px 2px 4px 0 rgba(0, 0, 0, 0.2), 1px 6px 20px 0 rgba(0, 0, 0, 0.19)"
                  }}
                />
              </div>
              <div
                className="bio-name"
                style={{
                  fontWeight: "lighter",
                  fontFamily: "'proxima-nova',sans-serif",
                  color: "#0F1012",
                  display: "inline-block",
                  verticalAlign: "middle"
                }}
              >
                <span style={{ fontSize: "x-large" }}>Hunter Hillman</span>
                <br />
                <span style={{ fontStyle: "italic" }}>Head of Growth</span>
              </div>
              {/* <div
            className="bio-bio"
            style={{
              fontWeight: "lighter",
              fontFamily: "'proxima-nova',sans-serif",
              color: "#0F1012",
              display: "inline-block",
              verticalAlign: "middle"
            }}
          >
            Strategist, economist, marketer, data junkie. Thrives on music,
            hiking, coffee, and optimism. Former economic consultant and
            quantitative data analyst.
          </div> */}
            </div>
          </div>
          <div
            className="row"
            style={{ paddingTop:"5%",width: "100%", justifyContent: "center" }}
          >
            <h2 className="text" style={{ fontFamily: "Comfortaa" }}>
              Backed By
            </h2>
          </div>
          <div
            className="row"
            style={{
              paddingLeft:"5%",
              paddingRight:"5%",
              paddingBottom:"5%",
              width: "100%",
              alignItems: "center",
              justifyContent: "space-evenly",
              textAlign: "center",
              fontFamily: "'proxima-nova',sans-serif",
              fontSize:24,
              fontWeight:"lighter",
              flexWrap:"wrap"
            }}
          >
            <div className="col" style={{display:"block",whiteSpace:"nowrap"}}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://ethereum.org/"
              >
                <p style={{ color: "#0F1012", textAlign: "center" }}>
                  Ethereum Foundation
                </p>
              </a>
            </div>
            <div className="col">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://hashed.com/"
              >
                <p style={{ color: "#0F1012", textAlign: "center" }}>Hashed</p>
              </a>
            </div>

            <div className="col" style={{display:"block",whiteSpace:"nowrap"}}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://kenetic.capital/"
              >
                <p style={{ color: "#0F1012", textAlign: "center" }}>
                  Kenetic Capital
                </p>
              </a>
            </div>

            <div className="col" style={{display:"block",whiteSpace:"nowrap"}}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.genesisblockchain.io/"
              >
                <p style={{ color: "#0F1012", textAlign: "center" }}>
                  Genesis Block
                </p>
              </a>
            </div>

            <div className="col" style={{display:"block",whiteSpace:"nowrap"}}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.montavc.com/"
              >
                <p style={{ color: "#0F1012", textAlign: "center" }}>
                  Monta Vista Capital
                </p>
              </a>
            </div>

            <div className="col" style={{display:"block",whiteSpace:"nowrap"}}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://spankchain.com/"
              >
                <p style={{ color: "#0F1012", textAlign: "center" }}>
                  Spankchain
                </p>
              </a>
            </div>

            <div className="col" style={{display:"block",whiteSpace:"nowrap"}}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.kryptonite1.co/"
              >
                <p style={{ color: "#0F1012", textAlign: "center" }}>Kryptonite1</p>
              </a>
            </div>
            <div className="col" style={{display:"block",whiteSpace:"nowrap"}}>

                <p style={{ color: "#0F1012", textAlign: "center" }}>Dan Matuszewski</p>
            </div>
            <div className="col" style={{display:"block",whiteSpace:"nowrap"}}>

<p style={{ color: "#0F1012", textAlign: "center" }}>Dino Mihalopoulos</p>
</div>
          </div>
        </div>

        <div className="team-cta" style={{ display: "flex" }}>
          <div style={{ textAlign: "center", paddingBottom: "2.5%" }}>
            <h2
              style={{
                fontWeight: "lighter",
                fontFamily: "comfortaa",
                color: "#0F1012",
                float: "none"
              }}
            >
              Want to learn more about Connext?
            </h2>
          </div>

          <div
            className="team-cta-buttons"
            style={{
              fontWeight: "lighter",
              fontFamily: "'proxima-nova',sans-serif",
              textAlign: "center"
            }}
          >
            <a
              className="team-readdocs-button"
              href="https://docs.connext.network"
              style={{ textDecoration: "none" }}
            >
              Read our documentation
            </a>
            <a
              className="team-joincommunity-button"
              href="https://discord.gg/yKkzZZm"
              style={{ textDecoration: "none" }}
            >
              Join our community chat
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
