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
                <div className="layer" style={{width:"40%", order:"1"}}>
                    <img src={payments} alt="Illustration of a blockchain (blue) with ERC20 token logos above" style={{width:"250px"}}/>
                </div>
                <div className="explainer1"style={{ textAlign:"left",order:"2", marginBottom:"20%"}}>
                    <h2 style={{
                                fontFamily: "Comfortaa",
                                color:"#FCA311"}}>
                    Payments Reinvented
                    </h2>
                    We believe that small-value P2P transactions, secured and supported by blockchains,
                    will unlock untapped economic potential. We enable the transaction throughput 
                    and speed needed to make this a reality.
                </div>
                <div className="explainer2"style={{marginRight:"0%",textAlign:"left",order:"3"}}>
                    <h2 style={{
                                fontFamily: "Comfortaa",
                                color:"#FCA311"}}>
                    Meet Indra
                    </h2>
                    Indra, our flagship offering, makes it easy to set up and use a payment channel hub. 
                    By securely moving Ethereum and ERC20 transactions to a trustless, off-chain layer, 
                    we minimize the transaction fees and latency that hinder UX and 
                    prevent applications from scaling.
                </div>
                <div className="payments" style={{width:"40%",order:"4"}}>
                    <img src={layer2} alt="Illustration of blockchain (blue) with a new 
                                            (orange) block being added" style={{width:"300px"}}/>
                </div>
            </div>
        )
    }
}

export default Explainer;
