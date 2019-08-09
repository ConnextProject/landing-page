import React, {Component} from "react";
import nothing_to_see_here from "../assets/nothing_to_see_here.gif";
import {Link} from "react-router-dom";
import "./NotFound.css";

class NotFound extends Component{
    render() {
        return(
            <div className="notfound-toplevel" style={{display:"flex",
                            height:"100%",
                            alignItems:"center"}}>
                <h1 style={{fontFamily:"Comfortaa", fontSize:"80px", color:"#FFF"}}>404</h1>
                <h1 style={{fontFamily:"Comfortaa", marginTop:"10%"}}> Oops! This page doesn't exist. Maybe you were looking for one of these?</h1>
                <div className="buttons" style={{display:"flex"}}>
                    <Link className="home" to="/" style={{marginTop:"5%",marginBottom:"5%",backgroundColor:"#FFF",textDecoration:"none"}}>
                        Home
                    </Link>
                    <Link className="about" to="/Team" style={{backgroundColor:"#FFF",textDecoration:"none",color:"#FFF"}}>
                        About
                    </Link>
                </div>
                {/* <img className="gif" src={nothing_to_see_here} alt="Please disperse gif" style={{borderRadius:"8px"}}/> */}
            </div>
        )
    }
}

export default NotFound;