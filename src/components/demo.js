import React, { Component } from 'react';
import AnimatedNumber from 'react-animated-number';
import './demo.css';
import spinner from '../assets/spinner.gif';
import greencheck from '../assets/greencheck.png';
import step1 from '../assets/step1.svg';
import step2 from '../assets/step2.svg';
import step3 from '../assets/step3.svg';
import step4A from '../assets/step4A.svg';
import step4B from '../assets/step4B.svg';
import bullet from '../assets/bullet.svg';
import dai from '../assets/dai.png';


class Demo extends Component {
    constructor(props) {
        super(props);
    
        //this.handleDepositEntry = this.handleDepositEntry.bind(this);
        this.handleThreadEntry = this.handleThreadEntry.bind(this);

        this.handleDepositSubmit = this.handleDepositSubmit.bind(this);
        this.handleThreadSubmit = this.handleThreadSubmit.bind(this);
        this.handleDrain = this.handleDrain.bind(this);
        this.cashOut = this.cashOut.bind(this);
      }
    state = {
        balanceA: 0,
        balanceB: 0,
        onChainBalanceB:0,
        value: 0,
        toPay:0,
        txCount:0,
        showSpinner:null
      };

      sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }

    //   handleDepositEntry(event) {
    //     this.setState({value: event.target.value});
    //   }

     async handleDepositSubmit(event) {
        //var value = this.state.value;
        this.setState({showSpinner:true});
        await this.sleep(3000);
        this.setState({showSpinner:false});
        var value = 50;
        if(value < 0){
            alert("Please enter a non-negative value!")
        }else{
            this.setState(({ balanceA }) => ({
                balanceA: balanceA + value*1
            }))
            event.preventDefault();
        }
      }


      handleThreadEntry(event) {
        this.setState({toPay: event.target.value});
      }

      handleThreadSubmit(event) {
        //var toPay = this.state.toPay;
        var toPay = 0.05;
        var balanceA = this.state.balanceA;
        var balanceB = this.state.balanceB;
        var txCount = this.state.txCount;

        var txCountUpdate = +(parseFloat(txCount+1).toFixed(0));
        var updateA = +(parseFloat(balanceA-toPay).toFixed(2));
        var updateB = +(parseFloat(balanceB+toPay).toFixed(2));

        if(toPay < 0){
            alert("Please enter a non-negative value!")
        }else if(this.state.balanceA < toPay){
            alert("Insufficient funds! Please deposit more.")
        }else{
            console.log(this.state.balanceA)
            console.log(this.state.balanceB)
            console.log(this.state.toPay)
            this.setState(({ balanceA }) => ({
                balanceA: updateA
            }))
            this.setState(({ balanceB }) => ({
                balanceB: updateB
            }))
            this.setState(({ txCount }) => ({
                txCount: txCountUpdate
            }))
            event.preventDefault();
        }
      }
      handleDrain(event) {
        var price = 0.05;
        var txCount = this.state.txCount;
        var balanceA = this.state.balanceA;
        var totalTx = +(parseFloat(balanceA / price).toFixed(0));
        if(this.state.balanceA < price){
            alert("Insufficient funds! Please deposit more.")
        }else{
            console.log(this.state.balanceA)
            console.log(this.state.balanceB)
            console.log(this.state.toPay)
            this.setState(({ balanceB }) => ({
                balanceB: (balanceB + balanceA)
            }))
            this.setState(({ balanceA }) => ({
                balanceA: (0)
            }))
            this.setState(({ txCount }) => ({
                txCount: txCount + totalTx
            }))
            event.preventDefault();
          }
        }
    
        async cashOut(){
            if (this.state.balanceB==0){
                alert("No channel balance to withdraw!")
            }else{
                this.setState({showSpinner:true});
                await this.sleep(3000);
                this.setState({showSpinner:false});
                var balanceB = this.state.balanceB;
                this.setState(({onChainBalanceB}) =>({
                    onChainBalanceB: balanceB
                }));
                this.setState(({ balanceB }) => ({
                    balanceB: 0
                }));
            }
        }

      render() {
        return(
        <div style={{textAlign:"center",
                    fontWeight:"lighter",
                    fontFamily: "'proxima-nova',sans-serif",
                    color:"#0F1012"}}>
        <div>
            <h1 style={{fontWeight:"lighter",
                        fontFamily: "Comfortaa",
                        color:"#0F1012"}}>How it works</h1>
            <h6  className="subhead" style={{margin:"auto"}}>Let's walk through a typical payment flow</h6>
        </div>
        <div className="step-wrapper" style={{display:"flex",}}>
            <div className="step1card" style={{   border: "5px solid #fff",
                            borderRadius: "20px",
                            boxShadow: "2px 4px 8px 0 rgba(0, 0, 0, 0.2), 2px 12px 40px 0 rgba(0, 0, 0, 0.19)",
                            display: "flex",
                            height:"150px"

                            }}>
                <div className="card-text-1" style={{display:"flex"}}>
                    <div style={{width:"70%", marginLeft:"0%", marginTop:"3%", fontSize:"16px"}}>
                           <h5> Alice's Channel Balance </h5>
                        { this.state.showSpinner ? 
                            <img src={spinner} alt="orange loading spinner" style={{marginTop:"25px",width:"50px"}}/> 
                            : <div style={{marginLeft:"8%",marginTop:"-5%"}}>
                            <AnimatedNumber component="text" value={this.state.balanceA} stepPrecision={2}
                                style={{
                                    fontSize:"60px",
                                    fontSize:"80px",
                                    fontFamily:"'proxima-nova-semibold', sans-serif",
                                    color:"#08B22D",
                                    transition: '0.8s ease-out',
                                    transitionProperty:
                                        'background-color, color, opacity'
                                }}
                                duration={50}/> 
                                {/* <img src={dai} alt="dai" style={{marginLeft:"-25px",marginTop:"-35px",width:"100px"}} />  */}
                                </div>
                                 }
                    </div>
                    <div className="card-graphics-1" style={{}}>
                        <img src={step1} alt="Brown-haired woman in yellow shirt and turqoise pants gesturing with her arm" style={{ width:"250px"}}></img>
                    </div>
                </div>
            </div>
            <div className="bullet" >
                <img className="bullet-sub" src={bullet} alt="Orange bullet point" />
            </div>
            <div className="step-paragraph" style={{textAlign:"left"}}>
                <h4 style={{fontWeight:"lighter",
                                fontFamily: "Comfortaa",
                                color:"#FCA311",
                                }}>
                    STEP 1
                </h4>
                <p>
                    First, Alice deposits some DAI to their friendly neighborhood Connext Hub. Let's give them a hand. 
                    Now, watch their channel balance increase.
                </p>
                <button className="demo-button" onClick={this.handleDepositSubmit}>
                    Deposit money to channel
                </button>
            </div>
        </div>
        <div className="step-wrapper-reverse" style={{marginTop:"5%", display:"flex",marginLeft:"10%"}}>
            <div className="step-paragraph" style={{textAlign:"right"}}>
                <h4 style={{fontWeight:"lighter",
                                    fontFamily: "Comfortaa",
                                    color:"#FCA311"}}>
                    STEP 2
                </h4>
                <p>
                    Now, it's time for Alice to pay someone! The counterparty is also connected to the hub, so they can open a thread 
                    and pay them directly. 
                    You'll see one balance increase, and the other decrease.
                </p>
                <button className="demo-button" onClick={this.handleThreadSubmit}>Make a payment</button>
            </div>
            <div className="bullet">
                <img className="bullet-sub" src={bullet} alt="Orange bullet point" />
            </div>
            <div xs="5" className="step2card" style={{   border: "5px solid #fff",
                            borderRadius: "20px",
                            boxShadow: "1px 2px 4px 0 rgba(0, 0, 0, 0.2), 1px 6px 20px 0 rgba(0, 0, 0, 0.19)",
                            fontWeight:"lighter",
                            fontFamily: "'proxima-nova',sans-serif",
                            color:"#0F1012",
                            display:"flex"}}>
                <div className="card-graphics-2" style={{}}>
                    <img src={step2} alt="brown-haired woman in yellow shirt holding smartphone" style={{ width:"220px"}}></img>
                </div>
                <div className="card-text-2">
                <div className="user1" style={{}}>
                <h5>Alice's <br />Thread Balance</h5>
                <AnimatedNumber component="text" value={this.state.balanceA} stepPrecision={2}
                    style={{
                        color:"#F22424",
                        fontSize:"70px",
                        fontFamily:"'proxima-nova-semibold', sans-serif",
                        fontWeight:"bold",
                        transition: '0.8s ease-out',
                        transitionProperty:
                            'background-color, color, opacity'
                    }}frameStyle={perc => (
                        perc === 100 ? {}:{color: '#08B22D'} 
                    )}
                    duration={50} /> 
                    {/* <img src={dai} alt="dai" style={{marginLeft:"-25px",marginTop:"-35px",width:"100px"}} /> */}
                </div>
                <div className="user2" style={{}}>
                <h5>Bob's <br /> Thread Balance </h5>
                <AnimatedNumber component="text" value={this.state.balanceB} stepPrecision={2}
                    style={{
                        color:"#08B22D",
                        fontSize:"70px",
                        fontFamily:"'proxima-nova-semibold', sans-serif",
                        fontWeight:"bold",
                        transition: '0.8s ease-out',
                        transitionProperty:
                            'background-color, color, opacity'
                    }}frameStyle={perc => (
                        perc === 100 ? {}:{color: '#F22424'} 
                    )}
                    duration={50} /> 
                    {/* <img src={dai} alt="dai" style={{marginLeft:"-25px",marginTop:"-35px",width:"100px"}} /> */}
                </div>
                </div>
            </div>
        </div>
        <div className="step-wrapper" style={{marginTop:"5%", display:"flex"}}>

            <div className="step3card" style={{   border: "5px solid #fff",
                            borderRadius: "20px",
                            boxShadow: "1px 2px 4px 0 rgba(0, 0, 0, 0.2), 1px 6px 20px 0 rgba(0, 0, 0, 0.19)",
                            display: "flex",
                            fontWeight:"lighter",
                            fontFamily: "'proxima-nova',sans-serif",
                            color:"#0F1012"}}>
                <div className="card-graphics-3" style={{}}>
                    <img src={step3} alt="Black-haired man holding ERC20 token logos" style={{ width:"160px"}}></img>
                </div>
                <div className="card-text-3" style={{}}>
                <h5>Alice's Thread Balance</h5>
                <AnimatedNumber component="text" value={this.state.balanceA} stepPrecision={2}
                    style={{
                        color:"#F22424",
                        fontSize:"70px",
                        fontFamily:"'proxima-nova-semibold', sans-serif",
                        fontWeight:"bold",
                        transition: '0.8s ease-out',
                        transitionProperty:
                            'background-color, color, opacity'
                    }}frameStyle={perc => (
                        perc === 100 ? {}:{color: '#08B22D'} 
                    )}
                    duration={200} />&nbsp;
                    {/* <img src={dai} alt="dai" style={{marginLeft:"-25px",marginTop:"-35px",width:"100px"}} /> */}
                </div>                
                <div style={{marginLeft:"2%",fontSize:"16px",paddingRight:"4%",borderRight:"1px solid #C1C6CE"}}>
                <h5>Bob's Thread Balance</h5>
                <AnimatedNumber component="text" value={this.state.balanceB} stepPrecision={2}
                    style={{
                        color:"#08B22D",
                        fontSize:"70px",
                        fontFamily:"'proxima-nova-semibold', sans-serif",
                        fontWeight:"bold",
                        transition: '0.8s ease-out',
                        transitionProperty:
                            'background-color, color, opacity'
                    }} frameStyle={perc => ( 
                        perc === 100 ? {}:{color: '#F22424'} 
                    )}
                    duration={200} />&nbsp;
                    {/* <img src={dai} alt="dai" style={{marginLeft:"-25px",marginTop:"-35px",width:"100px"}} /> */}
                </div>
                <div className="card-text-3b" style={{}}>
                <h5>Total <br/>transactions</h5> 
                <AnimatedNumber component="text" value={this.state.txCount} stepPrecision={0}
                    style={{
                        color:"#F22424",
                        fontSize:"70px",
                        fontFamily:"'proxima-nova-semibold', sans-serif",
                        fontWeight:"bold",
                        transition: '0.8s ease-out',
                        transitionProperty:
                            'background-color, color, opacity'
                    }} frameStyle={perc => (
                        perc === 100 ? {}:{color: '#08B22D'} 
                    )}
                    duration={200} />
                </div>               
            </div>
            <div className="bullet-3" >
                <img className="bullet-sub" src={bullet} alt="Orange bullet point" style={{margin:"auto"}}/>
            </div>
            <div className="step-paragraph-3" style={{textAlign:"left"}}>
                <h4 style={{fontWeight:"lighter",
                                fontFamily: "Comfortaa",
                                color:"#FCA311"}}>
                    STEP 3
                </h4>
                <p>Payments through a Connext Hub are instant and free, so your users can go ahead and pay as frequently
                    as they want. Try making a lot of payments!
                </p>
                <button className="demo-button"onClick={this.handleDrain}>Make more payments</button>
            </div>
        </div>
        <div className="step-wrapper-reverse" style={{marginTop:"5%",display:"flex",marginLeft:"10%"}}>
            <div className="step-paragraph" style={{textAlign:"right"}}>
                <h4 style={{fontWeight:"lighter",
                                    fontFamily: "Comfortaa",
                                    color:"#FCA311"}}>STEP 4</h4>
                <p style={{textAlign:"right"}}>Now Bob wants to withdraw their money to use on a site that hasn't integrated Connext. Sad face.
                    Press "Cash out" and watch the money flow into their wallet!
                </p>
                <button className="demo-button" onClick={this.cashOut}>Cash out</button>
            </div>
            <div className="bullet-4">
                <img className="bullet-sub" src={bullet} alt="Orange bullet point" />
            </div>
            <div className="step4card" style={{   border: "5px solid #fff",
                            borderRadius: "20px",
                            boxShadow: "1px 2px 4px 0 rgba(0, 0, 0, 0.2), 1px 6px 20px 0 rgba(0, 0, 0, 0.19)",
                            fontWeight:"lighter",
                            fontSize:24,
                            fontFamily: "'proxima-nova',sans-serif",
                            color:"#0F1012",
                            display:"flex"}}>
                <div className="card-graphics-4B" style={{}}>
                    <img src={step4B} alt="Phone with Ethereum and ERC20 token logos" style={{width:"85px"}} />
                </div>
                    <div className="card-text-4" style={{fontSize:"16px",marginLeft:"10%"}}>
                        <h5>Bob's <br />Channel Balance</h5>
                        { this.state.showSpinner ? 
                            <img src={spinner} alt="orange loading spinner" style={{margin:"auto",width:"50px"}}/> 
                            : 
                            <div>
                                
                                <AnimatedNumber component="text" value={this.state.balanceB} stepPrecision={2}
                                    style={{
                                        color:"#F22424",
                                        fontSize:"70px",
                                        fontFamily:"'proxima-nova-semibold', sans-serif",
                                        fontWeight:"bold",
                                        transition: '0.8s ease-out',
                                        transitionProperty:
                                            'background-color, color, opacity'
                                    }} frameStyle={perc => (
                                        perc === 100 ? {}:{color: '#F22424'} 
                                    )}
                                    duration={50} />
                                    {/* <img src={dai} alt="dai" style={{marginLeft:"-25px",marginTop:"-35px",width:"100px"}} />  */}
                            </div>
                        }
                    </div>
                    <div className="card-text-4" style={{marginLeft:"2%",fontSize:"16px"}}>
                        <h5>Bob's <br />Wallet Balance</h5>
                        { this.state.showSpinner ? 
                            <img src={spinner} alt="orange loading spinner" style={{margin:"auto",width:"50px"}}/> 
                        : 
                        <div>
                        <AnimatedNumber component="text" value={this.state.onChainBalanceB} stepPrecision={2}
                            style={{
                                color:"#F22424",
                                fontSize:"70px",
                                fontFamily:"'proxima-nova-semibold', sans-serif",
                                transition: '0.8s ease-out',
                                transitionProperty:
                                    'background-color, color, opacity',
                            }} frameStyle={perc => (
                                perc === 100 ? {}:{color: '#08B22D'} 
                            )}
                            duration={50} />&nbsp;
                            {/* <img src={dai} alt="dai" style={{marginLeft:"-25px",marginTop:"-35px",width:"100px"}} /> */}
                        </div>
                        }
                    </div>
                    <div className="card-graphics-4A" style={{}}>
                        <img src={step4A} alt="Black-haired man in blue shirt and dark blue overalls gestures with his arm" style={{ width:"250px"}}></img>
                    </div>
            </div>
        </div>
        </div>
        )
    } 
}

export default Demo;