import React from "react"
import {BrowserRouter as Router, Link} from "react-router-dom"
const MainMenu = () =>{
    return (
        <div className = "row">
        <nav>
            <ul>
            <li><a href="/">Home</a></li>
            <li><a href="">Add Contact</a></li>
            <li><a href="">About</a></li>
                </ul>
            </nav>
            </div>
    )
}
export default MainMenu