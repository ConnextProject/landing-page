import React, {Component} from "react";
import './viable.css';
import developer from "../assets/developer.svg";


class Viable extends Component{
    render(){
        return(
        <div className="viable">
          <div style={{width:"100%",textAlign:"center"}}>
            <h1 style={{fontWeight:"lighter",
                              fontFamily: "Comfortaa",
                              color:"#0F1012"}}>
              Making blockchain viable.
            </h1>
          </div>
          <div className="viable-text" style={{textAlign:"center",
                        fontWeight:"lighter",
                        fontFamily: "'proxima-nova',sans-serif",
                        color:"#0F1012",
                        display:"flex"}}> 
            <div className="viable-block-pic" style={{marginBottom:"6%"}}>
              <img className="developer" src={developer} alt="developer image" />
            </div>
            <div className="viable-block-1" style={{marginBottom:"6%"}}>
                <h5 style={{color:"#FCA311"}} >DEVELOPER FOCUSED</h5>
                <br />
                We obsess about creating the optimal developer experience by shipping 
                modular, intuitive, and robust integration paths. Check out our docs to get started.
            </div>    
            <div className="divider">
            </div> 
            <div className="viable-block" style={{marginBottom:"6%"}}>
                <h5 style={{color:"#FCA311"}} >TRUSTLESS</h5>
                <br />
                Our formally verified framework eliminates all counterparty risk. 
                This means your applicaction always preserves the security guarantees of the blockchain.
            </div>     
            <div className="divider"></div>  
            <div className="viable-block" style={{marginBottom:"6%"}}>
              <h5 style={{color:"#FCA311"}} >OPEN SOURCE</h5>
              <br />
              We strongly support open source software and permissionless development. 
              We welcome any feedback and contributions to our repositories.
            </div>
          </div>
      </div>
        )
    }
}

export default Viable;