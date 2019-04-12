import React, {Component} from "react";
import provide from "../assets/provide.png"
import spank from "../assets/spank.png"
import ujo from "../assets/ujo.png"
import mosendo from "../assets/mosendo.svg"
import './usingConnext.css';

class UsingConnext extends Component{
    render(){
        return(
            <div className="usingConnext">
                <div className="row">
                    <h1 className="text">Some projects who are using Connext</h1>
                </div>
                <div className="row">
                <div className="col">
                    <a target="_blank" rel="noopener noreferrer" href="https://spankchain.com/">
                        <img className="logo-spank" src={spank} alt="Spankchain"  />
                    </a>
                    </div>
                    <div className="col">
                    <a target="_blank" rel="noopener noreferrer" href="https://provide.services/">
                        <img className="logo-provide" src={provide} alt="Provide.Services" />
                    </a>
                    </div>

                    <div className="col">
                    <a target="_blank" rel="noopener noreferrer" href="https://ujomusic.com/">
                        <img className="logo-ujo" src={ujo} alt="Ujo Music"  />
                    </a>
                    </div>
                    <div className="col">
                    <a target="_blank" rel="noopener noreferrer" href="https://mosendo.com/">
                        <img className="logo-mosendo" src={mosendo} alt="Mosendo"  />
                    </a>
                    </div>
                </div>
            </div>)
    }
}

export default UsingConnext;