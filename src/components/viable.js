import React, {Component} from "react";
import './viable.css';
import developer from "../assets/developer.svg";
import CodeBlock from '@tenon-io/tenon-codeblock';



class Viable extends Component{
    render(){
        const codeText=`
      import * as Connext from "connext";     

      const connext = await Connext.getConnextClient({      
        web3Provider: window.web3     
        connextProvider: window.connext     
      })     

      await connext.deposit(amount);      
        `;
        return(
        <div className="viable" style={{ display:"flex",flexWrap:"wrap",marginTop:"-5%",width:"100%",textAlign:"center"}}>
          <div style={{width:"100%"}}>
            <h1 className="viable-header" style={{fontFamily: "Comfortaa",
                              color:"#0F1012"}}>
              Built for Web3
            </h1>
          </div>
            <div style={{width:"100%"}}>
            <p style={{fontSize:"18px", fontWeight:200, fontFamily: "'proxima-nova',sans-serif",
                              color:"#0F1012"}}>
              Want to integrate Connext? It's easy!
            </p>
            </div>
          
          <div style={{justifyContent:"center",display:"flex",flexWrap:"wrap", width:"100%"}}>
          <div className="viable-block-pic">
              <img className="developer" src={developer} alt="Developer wearing blue shirt and gray pants seated coding on laptop" />
            </div>
            <div className="code-block">
          <CodeBlock
            codeString={codeText}
            
            />
            </div>
          </div>
        </div>
      )
    }
}

export default Viable;