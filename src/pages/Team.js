import React, { Component } from 'react';
import './team.css';
import arrow from '../assets/arrow.png';
import arjun from '../assets/arjun.png';
import layne from '../assets/layne.jpeg';
import rahul from '../assets/rahul.png';
import hunter from '../assets/hunter.png';

class Team extends Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef();
}

scrollToMyRef = () => {
  window.scrollTo({
      top:this.myRef.current.offsetTop, 
      behavior: "smooth"
  })
}

  render() {
    return (
      <div className="team-toplevel" style={{}}>
            <div className="team-header" style={{textAlign:"center", margin:"auto"}}>
                                                  
              <h2 style={{
                        fontFamily: "Comfortaa",
                        color:"#0F1012"}}>
                Team
              </h2>
            </div>
          <div className="bio-container" style={{display:"flex",width:"100%"}}>
              <div className="bio-pic" >
                <img src={arjun} alt="Arjun bitmoji" style={{
                                                              width:"110px",
                                                              border: "5px solid #fff",
                                                              borderRadius: "20px",
                                                              boxShadow: "1px 2px 4px 0 rgba(0, 0, 0, 0.2), 1px 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
                </img>
              </div>
              <div className="bio-name" style={{
                                                fontWeight:"lighter",
                                                fontFamily: "'proxima-nova',sans-serif",
                                                color:"#0F1012", 
                                                display:"inline-block",
                                                verticalAlign:"middle"
                                                }}>
                <span style={{fontSize:"x-large"}}>Arjun Bhuptani</span>
                <br />
                <span style={{fontStyle:"italic"}}>founder, project lead</span>
              </div>
              <div className="bio-bio"  style={{
                                                fontWeight:"lighter",
                                                fontFamily: "'proxima-nova',sans-serif",
                                                color:"#0F1012",
                                                display:"inline-block",
                                                verticalAlign:"middle"}}>
                Physicist turned smart contract developer and systems architect. 
                Game theory nerd, dad joke enthusiast and occasional sleeper. 
              </div>
            <div className="bio-pic" sm={{ size: '1', offset: 1}}>
                <img src={layne} alt="layne bitmoji" style={{
                                                              width:"110px",
                                                              border: "5px solid #fff",
                                                              borderRadius: "20px",
                                                              boxShadow: "1px 2px 4px 0 rgba(0, 0, 0, 0.2), 1px 6px 20px 0 rgba(0, 0, 0, 0.19)"}}></img>
              </div>
              <div className="bio-name" style={{
                                                fontWeight:"lighter",
                                                fontFamily: "'proxima-nova',sans-serif",
                                                color:"#0F1012", 
                                                display:"inline-block",
                                                verticalAlign:"middle"
                                                }}>
                <span style={{fontSize:"x-large"}}>Layne Haber</span>
                <br />
                <span style={{fontStyle:"italic"}}>founder, COO</span>
              </div>
              <div className="bio-bio"  style={{
                                                fontWeight:"lighter",
                                                fontFamily: "'proxima-nova',sans-serif",
                                                color:"#0F1012",
                                                display:"inline-block",
                                                verticalAlign:"middle"}}>
                 Operations and Web3 engineering. 
                 Currently busy skiing, cooking, and exploring rabbit holes. 
                 Pre-crypto: healthcare, venture banking, and bioengineering. 
              </div>
            <div className="bio-pic" sm={{ size: '1', offset: 1}}>
                <img src={rahul} alt="rahul bitmoji" style={{
                                                              width:"110px",
                                                              border: "5px solid #fff",
                                                              borderRadius: "20px",
                                                              boxShadow: "1px 2px 4px 0 rgba(0, 0, 0, 0.2), 1px 6px 20px 0 rgba(0, 0, 0, 0.19)"}}></img>
              </div>
              <div className="bio-name" style={{
                                                fontWeight:"lighter",
                                                fontFamily: "'proxima-nova',sans-serif",
                                                color:"#0F1012", 
                                                display:"inline-block",
                                                verticalAlign:"middle"
                                                }}>
                <span style={{fontSize:"x-large"}}>Rahul Sethuram</span>
                <br />
                <span style={{fontStyle:"italic"}}>founder, CTO</span>
              </div>
              <div className="bio-bio"  style={{
                                                fontWeight:"lighter",
                                                fontFamily: "'proxima-nova',sans-serif",
                                                color:"#0F1012",
                                                display:"inline-block",
                                                verticalAlign:"middle"}}>
                Full-stack developer, serial entrepreneur, investor, fan of blockchains. 
                Jiu-jitsu, yoga, and snowboarding enthusiast. Formerly an electrical engineer at Tesla.
              </div>
            <div className="bio-pic" sm={{ size: '1', offset: 1}}>
                <img src={hunter} alt="hunter bitmoji" style={{
                                                              width:"110px",
                                                              border: "5px solid #fff",
                                                              borderRadius: "20px",
                                                              boxShadow: "1px 2px 4px 0 rgba(0, 0, 0, 0.2), 1px 6px 20px 0 rgba(0, 0, 0, 0.19)"}}></img>
              </div>
              <div className="bio-name" style={{
                                                fontWeight:"lighter",
                                                fontFamily: "'proxima-nova',sans-serif",
                                                color:"#0F1012", 
                                                display:"inline-block",
                                                verticalAlign:"middle"
                                                }}>
                <span style={{fontSize:"x-large"}}>Hunter Hillman</span>
                <br />
                <span style={{fontStyle:"italic"}}>head of growth</span>
              </div>
              <div className="bio-bio"  style={{
                                                fontWeight:"lighter",
                                                fontFamily: "'proxima-nova',sans-serif",
                                                color:"#0F1012",
                                                display:"inline-block",
                                                verticalAlign:"middle"}}>
                Strategist, economist, marketer, data junkie. 
                Thrives on music, hiking, coffee, and optimism. 
                Former economic consultant and quantitative data analyst. 
              </div>
            <div className="jobs" name="jobs" style={{width:"100%",marginTop:"2.5%",
                                                      fontWeight:"lighter",
                                                      fontFamily: "'proxima-nova',sans-serif",
                                                      color:"#0F1012",
                                                      verticalAlign:"middle",
                                                      fontStyle: "italic",
                                                      margin:"auto",
                                                      textAlign:"center"}}>
                  Connext is unlocking the micropayment economy of the future. If you'd like to help, reach out to support@connext.network.
            </div>
            <div style={{margin:"auto", paddingTop:"5%"}}> 
                <a onClick={this.scrollToMyRef}><img src={arrow} alt="down arrow" style={{width:"30px", height:"30px"}}></img></a>
            </div>
          </div>
          <div className="team-cta" style={{marginTop:"5%",display:"flex"}}>
                <div ref={this.myRef} style={{textAlign:"center", paddingBottom:"2.5%"}}>
                  <h2 style={{fontWeight:"lighter",
                            fontFamily: "comfortaa",
                            color:"#0F1012",
                            float:"none"}}>
                      Want to learn more about Connext? 
                  </h2>
                </div>
                <div className="team-cta-buttons" style={{fontWeight:"lighter",
                          fontFamily: "'proxima-nova',sans-serif",
                          color:"#0F1012",
                          textAlign:"center",
                          }}>
                  <a className="team-readdocs-button" 
                   href="https://docs.connext.network" style={{textDecoration:"none",color:"inherit"}}>
                      Read our documentation
                  </a>
                  <a className="team-joincommunity-button" href="https://discord.gg/yKkzZZm" style={{textDecoration:"none",color:"inherit"}}>
                      Join our community chat
                    </a>
                </div>
          </div>
      </div>
    )
  }
};

export default Team;


