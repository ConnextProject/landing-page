import React, {Component} from "react";
import './viable.css';
import developer from "../assets/developer.svg";


class Viable extends Component{
    render(){
        return(
        <div className="viable">
          <div style={{width:"100%",textAlign:"center"}}>
            <h1 className="viable-header" style={{fontFamily: "Comfortaa",
                              color:"#0F1012"}}>
              Making blockchain viable
            </h1>
          </div>
          <div className="viable-text" style={{textAlign:"center",
                        fontWeight:"normal",
                        color:"#0F1012",
                        display:"flex"}}> 
            <div className="viable-block-pic" style={{marginBottom:"6%"}}>
              <img className="developer" src={developer} alt="Developer wearing blue shirt and gray pants seated coding on laptop" />
            </div>
            <div className="viable-block-1" style={{marginBottom:"6%"}}>
                <h4 style={{color:"#FCA311", fontWeight:"lighter", fontFamily:"proxima-nova"}} >DEVELOPER FOCUSED</h4>
                We obsess about creating the optimal developer experience. Spin up
                your own hub in 5 lines of code and customize it easily to fit your needs.
            </div>    
            <div className="divider-v">
            </div> 
            <div className="viable-block" style={{marginBottom:"6%"}}>
                <h4 style={{color:"#FCA311", fontWeight:"lighter", fontFamily:"proxima-nova"}} >TRUST-MINIMIZED</h4>
                We take security seriously. Leveraging the latest payment channel 
                research, Connext removes the need to trust counterparties.
            </div>     
            <div className="divider-v"></div>  
            <div className="viable-block" style={{marginBottom:"6%"}}>
              <h4 style={{color:"#FCA311", fontWeight:"lighter", fontFamily:"proxima-nova"}} >OPEN SOURCE</h4>
              We strongly support open source software and permissionless development. 
              You can find our repositories <a href="https://github.com/connextproject" style={{color:"#FCA311"}}>here</a>.
            </div>
          </div>
      </div>
        )
    }
}

export default Viable;