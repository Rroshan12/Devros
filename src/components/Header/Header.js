import React from 'react'
import './style.css'
import image from '../../images/banner.png'
import node from '../../images/node.jpeg'
import react from '../../images/react.jpeg'
import database from '../../images/database.png'

function Header() {
    return (
        <div id="mainy" >
            <div id="header">
            <img src={image} />
            <div class="container ">
                <h1>Hi I am Roshan Poudel</h1>
                <h2>I develop mern stack</h2>


            </div>
            </div>
           
            <div id="project-section" >
                <div className="project-wrap">
                <h1 >Skills</h1>
                <div class="flex wrap" >
                    <div className="node">
                        <img src={node} />

                    </div>
                    <div className="mongo">
                    <img src={react} />

                    </div>
                    <div className="react">
                    <img src={database} />

                    </div>
                    </div>
                </div>

            </div>
            <div id="footer-section">
                <h1>Project</h1>
            </div>



        </div>
    )
}

export default Header
