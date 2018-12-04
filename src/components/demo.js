import React, { Component } from 'react';
import AnimatedNumber from 'react-animated-number';
import './demo.css';
import spinner from '../assets/spinner.gif';
import step1 from '../assets/step1.svg';
import step2 from '../assets/step2.svg';
import step3 from '../assets/step3.svg';
import step4B from '../assets/step4B.svg';
import bullet from '../assets/bullet.svg';


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
        threadBalanceB: 0,
        channelBalanceB: 0,
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
        var toPay = 1;
        var balanceA = this.state.balanceA;
        var balanceB = this.state.threadBalanceB;
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
            console.log(this.state.threadBalanceB)
            console.log(this.state.toPay)
            this.setState(({ balanceA }) => ({
                balanceA: updateA
            }))
            this.setState(({ threadBalanceB }) => ({
                threadBalanceB: updateB
            }))
            this.setState(({ txCount }) => ({
                txCount: txCountUpdate
            }))
            event.preventDefault();
        }
      }
      handleDrain(event) {
        var price = 1;
        var balanceA = this.state.balanceA;
        var totalTx = +(parseFloat(balanceA / price).toFixed(0));
        if(this.state.balanceA < price){
            alert("Insufficient funds! Please deposit more.")
        }else{
            console.log(this.state.balanceA)
            console.log(this.state.balanceB)
            console.log(this.state.toPay)
            this.setState(({ threadBalanceB }) => ({
                threadBalanceB: (threadBalanceB + balanceA)
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
            var threadBalanceB = this.state.threadBalanceB;
            if (this.state.balanceB===0){
                alert("No channel balance to withdraw!")
            }else{
                this.setState(({channelBalanceB}) =>({
                    channelBalanceB: threadBalanceB
                }));
                await this.sleep(1000);
                this.setState({showSpinner:true});
                await this.sleep(3000);
                this.setState({showSpinner:false});
                var channelBalanceB = this.state.channelBalanceB;
                this.setState(({onChainBalanceB}) =>({
                    onChainBalanceB: channelBalanceB
                }));
                this.setState(({ channelBalanceB }) => ({
                    channelBalanceB: 0
                }));
            }
        }

      render() {
        return(
        <div style={{textAlign:"center",
                    fontWeight:"lighter",
                    fontFamily: "'proxima-nova',sans-serif",
                    color:"#0F1012"}}>
        <div style={{marginBottom:"10%"}}>
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
                           <h5> Your Channel Balance </h5>
                        { this.state.showSpinner ? 
                            <img src={spinner} alt="orange loading spinner" style={{marginTop:"25px",width:"50px"}}/> 
                            : <div style={{marginLeft:"8%",marginTop:"-5%"}}>
                            <AnimatedNumber component="text" value={this.state.balanceA} stepPrecision={0}
                                style={{
                                    fontSize:"70px",
                                    fontFamily:"'proxima-nova-semibold', sans-serif",
                                    color:"#08B22D",
                                    transition: '0.8s ease-out',
                                    transitionProperty:
                                        'background-color, color, opacity'
                                }}
                                duration={400}/> 
                                {/* <img src={dai} alt="dai" style={{marginLeft:"-25px",marginTop:"-35px",width:"100px"}} />  */}
                                </div>
                                 }
                    </div>
                    <div className="card-graphics-1" style={{}}>
                        <img src={step1} alt="Brown-haired woman in yellow shirt and turqoise pants gesturing with her arm" style={{ width:"250px"}}></img>
                    </div>
                </div>
            </div>
            <div className="bullet-1" >
                <img className="bullet-sub1" src={bullet} alt="Orange bullet point" />
            </div>
            <div className="step-paragraph" style={{textAlign:"left"}}>
                <h4 style={{fontWeight:"lighter",
                                fontFamily: "Comfortaa",
                                color:"#FCA311",
                                }}>
                    STEP 1
                </h4>
                <p>
                    First, load up your payment channel with the Connext Hub by depositing some money onchain.
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
                    Your favorite creator also has a channel with the hub! To pay them directly, 
                    you can open a temporary connection to their
                    channel, called a thread.
                </p>
                <button className="demo-button" onClick={this.handleThreadSubmit}>Make a payment</button>
            </div>
            <div className="bullet-2">
                <img className="bullet-sub2" src={bullet} alt="Orange bullet point" />
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
                <h5>Your <br />Thread Balance</h5>
                <AnimatedNumber component="text" value={this.state.balanceA} stepPrecision={0}
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
                    duration={400} /> 
                    {/* <img src={dai} alt="dai" style={{marginLeft:"-25px",marginTop:"-35px",width:"100px"}} /> */}
                </div>
                <div className="user2" style={{}}>
                <h5>Creator's <br /> Thread Balance </h5>
                <AnimatedNumber component="text" value={this.state.threadBalanceB} stepPrecision={0}
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
                    duration={400} /> 
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
                <div className="card-text-3" style={{}}>
                <h5>Your Thread Balance</h5>
                <AnimatedNumber component="text" value={this.state.balanceA} stepPrecision={0}
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
                    duration={400} />&nbsp;
                    {/* <img src={dai} alt="dai" style={{marginLeft:"-25px",marginTop:"-35px",width:"100px"}} /> */}
                </div>                
                <div className="card-text-3a" style={{fontSize:"16px"}}>
                <h5>Creator's Thread Balance</h5>
                <AnimatedNumber component="text" value={this.state.threadBalanceB} stepPrecision={0}
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
                    duration={400} />&nbsp;
                    {/* <img src={dai} alt="dai" style={{marginLeft:"-25px",marginTop:"-35px",width:"100px"}} /> */}
                </div>
                <div className="card-graphics-3" style={{}}>
                    <img src={step3} alt="Black-haired man holding ERC20 token logos" style={{ width:"220px"}}></img>
                </div>
                <div className="card-text-3b" style={{}}>
                <h5>Total transactions</h5> 
                <AnimatedNumber component="text" value={this.state.txCount} stepPrecision={0}
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
                    duration={400} />
                </div>               
            </div>
            <div className="bullet-3" >
                <img className="bullet-sub3" src={bullet} alt="Orange bullet point" style={{margin:"auto"}}/>
            </div>
            <div className="step-paragraph-3" style={{textAlign:"left"}}>
                <h4 style={{fontWeight:"lighter",
                                fontFamily: "Comfortaa",
                                color:"#FCA311"}}>
                    STEP 3
                </h4>
                <p>Thread payments are offchain, so they're free and instant! When you're done,
                     you or the creator can close the thread to update your channel balances.
                </p>
                <button className="demo-button"onClick={this.handleDrain}>Make more payments</button>
            </div>
        </div>
        <div className="step-wrapper-reverse" style={{marginTop:"5%",display:"flex",marginLeft:"10%"}}>
            <div className="step-paragraph" style={{textAlign:"right"}}>
                <h4 style={{fontWeight:"lighter",
                                    fontFamily: "Comfortaa",
                                    color:"#FCA311"}}>STEP 4</h4>
                <p style={{textAlign:"right"}}>
                After closing all of their threads,
                the creator can withdraw their earned money from the channel back into their wallet.
                </p>
                <button className="demo-button" onClick={this.cashOut}>Cash out</button>
            </div>
            <div className="bullet-4">
                <img className="bullet-sub4" src={bullet} alt="Orange bullet point" />
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
                    <img src={step4B} alt="Phone with Ethereum and ERC20 token logos" style={{width:"200px"}} />
                </div>
                    <div className="card-text-4" style={{fontSize:"16px",marginLeft:"10%"}}>
                        <h5>Creator's <br />Channel Balance</h5>
                        { this.state.showSpinner ? 
                            <img src={spinner} alt="orange loading spinner" style={{margin:"auto",width:"50px"}}/> 
                            : 
                            <div>
                                
                                <AnimatedNumber component="text" value={this.state.channelBalanceB} stepPrecision={0}
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
                                    duration={400} />
                                    {/* <img src={dai} alt="dai" style={{marginLeft:"-25px",marginTop:"-35px",width:"100px"}} />  */}
                            </div>
                        }
                    </div>
                    <div className="card-text-4b" style={{marginLeft:"0%",fontSize:"16px"}}>
                        <h5>Creator's <br />Wallet Balance</h5>
                        { this.state.showSpinner ? 
                            <img src={spinner} alt="orange loading spinner" style={{margin:"auto",width:"50px"}}/> 
                        : 
                        <div>
                        <AnimatedNumber component="text" value={this.state.onChainBalanceB} stepPrecision={0}
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
                            duration={400} />&nbsp;
                            {/* <img src={dai} alt="dai" style={{marginLeft:"-25px",marginTop:"-35px",width:"100px"}} /> */}
                        </div>
                        }
                    </div>
                    {/* <div className="card-graphics-4A" style={{}}>
                        <img src={step4A} alt="Black-haired man in blue shirt and dark blue overalls gestures with his arm" style={{ width:"250px"}}></img>
                    </div> */}
            </div>
        </div>
        </div>
        )
    } 
}

export default Demo;