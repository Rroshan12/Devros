import React from 'react'
import './style.css'
import image from '../../images/banner.png'
import node from '../../images/node.jpeg'
import react from '../../images/react.jpeg'
import database from '../../images/database.png'
import {AiOutlineGithub} from 'react-icons/ai'
import {FiFacebook} from 'react-icons/fi'
import {AiOutlineLinkedin} from 'react-icons/ai'
import Typical from 'react-typical'




function Header() {
    return (
        <div id="mainy" >
            <div id="header">
            <img src={image} />
            <div class="container ">
                <h1>Hi I'm Roshan Poudel</h1>
                <h2>I develop {''} <Typical
                loop={Infinity}
                wrapper='b'
                steps={
                    [
                        'React-frontend',1000,
                        'Node-backend',1000,
                        'Mongodb',1000,
                        'Express',1000,

                    ]
                }
                /></h2>
                
               



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
                <h1>Connect me At</h1>
                <div className="icons">
               <a href="https://github.com/Rroshan12" style={{textDecoration:'none', color:'white'}}> <AiOutlineGithub/>&nbsp; Github | &nbsp; </a>
               <a href="https://www.facebook.com/grappleroshan.poudel/" style={{textDecoration:'none', color:'white'}}> <FiFacebook/>&nbsp; Facebook | &nbsp; </a>
               <a href="https://www.linkedin.com/in/roshan-poudel-a84145185/" style={{textDecoration:'none', color:'white'}}><AiOutlineLinkedin/>&nbsp; Linkedin </a>

                </div>
              
           
                
            </div>



        </div>
    )
}

export default Header
