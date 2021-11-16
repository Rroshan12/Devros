import React from 'react'
import './style.css'
import image from '../../images/banner.png'

function Header() {
    return (
        <div id="mainy" >
            <img src={image}/>
            <div class="container ">
                <h1>Hi I am Roshan Poudel</h1>
                <h2>I develop mern stack</h2>

              
            </div>
            <div id="project-section">
                <h1>Project</h1>
            </div>
            <div id="footer-section">
                <h1>Project</h1>
            </div>
           
           
            
        </div>
    )
}

export default Header
