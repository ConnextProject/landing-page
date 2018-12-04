import React, {Component} from "react";
import './billions.css';
import payments from "../assets/payments.svg";
import layer2 from "../assets/layer.svg";


class Explainer extends Component{
    render(){
        return(
            <div className="explainer" style={{textAlign:"center",
                                                display:"flex", 
                                                marginBottom:"10%"}}>
                <div className="layer" style={{width:"50%", order:"1"}}>
                    <img src={payments} alt="Illustration of a blockchain (blue) with ERC20 token logos above" style={{width:"250px"}}/>
                </div>
                <div className="explainer1"style={{ textAlign:"left",order:"2", marginBottom:"20%"}}>
                    <h2 style={{
                                fontFamily: "Comfortaa",
                                color:"#FCA311"}}>
                    Payments Reinvented
                    </h2>
                    Existing payment systems struggle with small, p2p transactions.
                    We believe these transactions are immensely valuable to creators, micromerchants,
                    and machines.
                </div>
                <div className="explainer2"style={{marginRight:"0%",textAlign:"left",order:"3"}}>
                    <h2 style={{
                                fontFamily: "Comfortaa",
                                color:"#FCA311"}}>
                    Meet Connext
                    </h2>
                    Ethereum already enables p2p, trust-minimized payments.
                    Connext is the missing piece that cuts fees to 
                    nearly zero by securely moving transactions to a noncustodial offchain layer.                </div>
                <div className="payments" style={{width:"50%",order:"4"}}>
                    <img src={layer2} alt="Illustration of blockchain (blue) with a new 
                                            (orange) block being added" style={{width:"300px"}}/>
                </div>
            </div>
        )
    }
}

export default Explainer;
