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
                    <img src={layer2} alt="Illustration of blockchain (blue) with a new 
                                            (orange) block being added" style={{width:"300px"}}/>
                </div>
                <div className="explainer1"style={{ marginLeft:"5%", textAlign:"left",order:"2", marginBottom:"20%"}}>
                    <h2 style={{
                                fontFamily: "Comfortaa",
                                color:"#FCA311"}}>
                        Indra: A Layer on Top of the Blockchain
                    </h2>
                    Indra, our core offering, lets you easily set up and use a state channel hub. 
                    By securely moving transactions to a networked, trustless, off-chain layer, 
                    we minimize the transaction fees and latency that hinder UX and 
                    prevent dApps from scaling. We interoperate with Ethereum and all ERC20 tokens.
                </div>
                <div className="explainer2"style={{marginRight:"0%",textAlign:"right",order:"3"}}>
                    <h2 style={{
                                fontFamily: "Comfortaa",
                                color:"#FCA311"}}>
                        Payments Reinvented
                    </h2>
                    Modern payment systems struggle to handle peer-to-peer payments, especially
                    micropayments. We believe that the future of the economy is peer-to-peer, and that
                    most assets, applications, and ecosystems will be secured by blockchains.
                    We enable the transaction throughput and speed needed to make this a reality.
                </div>
                <div className="payments" style={{width:"40%",order:"4"}}>
                    <img src={payments} alt="Illustration of a blockchain (blue) with ERC20 token logos above" style={{width:"250px"}}/>
                </div>
            </div>
        )
    }
}

export default Explainer;
