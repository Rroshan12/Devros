import React,{useState} from 'react'
import{Link} from 'react-scroll'
import './style.css'


function Navbar() {
    const[nav,setnav]= useState(false);
    const changeBackground = () =>
    {
        if(window.scrollY >=50)
        {
            setnav(true);
        }
        else{
            setnav(false);
        }
    }
    window.addEventListener('scroll', changeBackground)
    return (
        <nav className={nav ? "nav active": "nav"} >
            <Link to="#" className='logo'>
                <h1>Dev.ros</h1>
            </Link>
            <ul class="w-70 " style={{ display: 'flex', listStyle: 'none', justifyContent: 'flex-end'  }}>
                <li class="mr5 grow "><Link to="container" spy={true} smooth={true} class="f5 dim">Home</Link></li>
                <li class="mr5 grow"><Link to="project-section" spy={true} smooth={true} class="f5  dim">Project</Link></li>
                <li class="mr5 grow"><Link to="footer-section" spy={true} smooth={true} class=" f5 dim">Contact</Link></li>
            </ul>


        </nav>
        
    )
}

export default Navbar
