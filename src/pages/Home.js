import React, {Component} from "react";
import {Link, Switch, Route} from "react-router-dom";
import Modal from "react-modal";
import Jobs from "./Jobs";
import Team from "./Team";
import Landing from "./Landing";
import Demo from "../components/demo";
import './styles.css';
import logoHorizontal from '../assets/logoHorizontal.png';
import logoWhiteHorizontal from '../assets/logoWhiteHorizontal.png';
import background_all from "../assets/background_all.svg";


Modal.setAppElement('#root'); 

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

handleOpenModal () {
  this.setState({ showModal: true });
}

handleCloseModal () {
  this.setState({ showModal: false });
}

toggleMenu(event) {
  event.preventDefault();

  this.setState(prevState => ({showMenu: !prevState.showMenu}), () => {
  });
}
// componentWillUpdate() {
//   React.findDOMNode(this).classList.add("class1", "class2");
// }

componentWillUpdate() {
   document.removeEventListener('click',this.toggleMenu);
  }

render() {
 
    return (
      <div className="top" style={{display:"block",overflow:"hidden"}}>
          {/* <img src={background_all} alt="background" style={{position:"absolute", top:"0%", left:"0",height:"100%",width:"100%", zIndex:"-1000"}} /> */}
          <div className="baseMobile">
            <div className="header"></div>
            <label htmlFor="hamburger" className="sidebarIconToggle" onClick={this.toggleMenu} >
            <div class={this.state.showMenu ? "hamburger hamburger--3dy is-active" : "hamburger hamburger--3dy"} style={{position:"relative",zIndex:1000}} >
              <div class="hamburger-box" style={{zIndex:1000}}>
                <div class="hamburger-inner" style={{zIndex:1000}}></div>
              </div>
            </div>
            </label>
            {this.state.showMenu ?
            (<div class={this.state.showMenu ? "sidebarMenu is-active" : "sidebarMenu"} style={{top:"0",zIndex:2}}>
              <ul className="sidebarMenuInner" onClick={this.toggleMenu} style={{
                position:'relative',
                listStyleType: 'none',
                margin: '1%',
                padding: '0',
                overflow: 'hidden',
                textAlign:'center'
              }}>
                <li style={{float:'left', align:'center'}}><Link to="/"><img src={logoHorizontal} alt="Connext Logo Horizontal" style={{width:"50%"}}/></Link></li>
                <li style={{float:'right'}}><a href= "https://medium.com/connext" className = "topNavLinkMobile">Blog</a></li>
                <li style={{float:'right'}}><Link to="/team" className = "topNavLinkMobile">Team</Link></li>                
                <li style={{float:'right'}}><a href="https://discord.gg/yKkzZZm" className = "topNavLinkMobile">Chat</a></li>
                <li style={{float:'right'}}><a href="https://docs.connext.network" className = "topNavLinkMobile">Docs</a></li>
                <li style={{position:"relative",float:'right', width:"100%"}}><a href="https://arjun126.typeform.com/to/HroioH" className = "signupMobile">Sign Up</a></li>                 
              </ul>
            </div>)
            :
            (null)}
            <div style={{width:"80%", margin:"auto", zIndex:"auto"}}>
                <Switch>
                  <Route exact path="/" component={Landing} />
                  <Route path="/team" component={Team} />
                </Switch>
            </div>
          </div> 
          <div className="baseDesktop">
            <div className="header">
              <ul className="topnav" style={{
                listStyleType: 'none',
                margin: '1%',
                padding: '0',
                overflow: 'hidden',
                textAlign:'center'
                }}>
                <li style={{position:"relative",left:"-10%",float:'left'}}><Link to="/"><img className="logo1" src={logoHorizontal} alt="Connext Logo Horizontal" style={{width:"30%", marginTop:"2%"}}></img></Link></li>
                <li style={{position:"relative",float:'right'}}><a onClick={this.handleOpenModal} className = "signupLink">Sign Up</a></li>
                <li style={{position:"relative",float:'right'}}><Link to="/team" className = "topNavLinkDesktop">Team</Link></li>
                <li style={{position:"relative",float:'right'}}><a href="https://docs.connext.network" className = "topNavLinkDesktop">Docs</a></li>
                <li style={{position:"relative",float:'right'}}><a href="https://discord.gg/yKkzZZm" className = "topNavLinkDesktop">Chat</a></li>                
                <li style={{position:"relative",float:'right'}}><a href= "https://medium.com/connext" className = "topNavLinkDesktop">Blog</a></li>               
              </ul>
            </div>
            <div style={{width:"84%", margin:"auto"}}>
              <div>
                <Modal className="typeform-modal" isOpen={this.state.showModal}>
                  <button className="modal-x" onClick={this.handleCloseModal}>
                    X
                  </button>
                  <iframe src="https://arjun126.typeform.com/to/HroioH" style={{width:"100%", 
                                                                                height:"95%"}}></iframe>
                </Modal>
              </div>
                <Switch>
                  <Route exact path="/" component={Landing} />
                  <Route path="/team" component={Team} />
                  <Route path="/demo" component={Demo} />
                </Switch>
            </div>
          </div>

          <div  className="footer"  style={{height:"auto",
                                            width:"100%",
                                            position:"relative",
                                            bottom:"0",
                                            marginTop:"-25%",
                                            display:"flex",
                                            flexDirection:"row",
                                            textAlign:"center", 
                                            paddingBottom:"2%"}}>

            <div className="footer-connext" style={{width:"20%",marginLeft:"5%",fontFamily: "'proxima-nova',sans-serif", 
                      fontSize: "small",
                      color: "white",
                      float:"left",
                      textAlign:"left",
                      order:"1"}}>
              <img className="footer-logo" src={logoWhiteHorizontal} alt="Connext Logo Horizontal White" style={{width:"110px",float:"left"}}></img>
              <br />
              <br />
              © 2018 Connext, Inc. All rights reserved.
            </div>
            <div className="spacer" style={{width:"50%",order:"2"}}></div>
            <div className="footer-company" style={{
                          fontFamily: "'proxima-nova',sans-serif", 
                          fontSize: "small",
                          color: "white",
                          order:"3"}}>
              <span style={{fontFamily:"comfortaa"}}>COMPANY</span>
              <br />
              <Link to="/team" style={{
                      fontFamily: "'proxima-nova',sans-serif", 
                      fontSize: "small",
                      color: "white"}}>Team</Link>
              <br />
              <Link to="/team#jobs" style={{
                      fontFamily: "'proxima-nova',sans-serif", 
                      fontSize: "small",
                      color: "white"}}>Jobs</Link>
            </div>
            <div className="footer-resources"  style={{
                          fontFamily: "'proxima-nova',sans-serif", 
                          fontSize: "small",
                          color: "white",
                          marginLeft:"5%",
                          order:"4"}}>
              <span style={{fontFamily:"comfortaa"}}>RESOURCES</span>
              <br />
              <a href="https://docs.connext.network" style={{
                      fontFamily: "'proxima-nova',sans-serif", 
                      fontSize: "small",
                      color: "white"}}>Docs</a>
              <br />
              <a href="https://medium.com/connext" style={{
                      fontFamily: "'proxima-nova',sans-serif", 
                      fontSize: "small",
                      color: "white"}}>Blog</a>
              <br />
              <a href="https://discord.gg/yKkzZZm" style={{
                      fontFamily: "'proxima-nova',sans-serif", 
                      fontSize: "small",
                      color: "white"}}>Chat</a>
              <br />
            </div>
          </div>
        </div>
    );
  }
};

export default Home;



