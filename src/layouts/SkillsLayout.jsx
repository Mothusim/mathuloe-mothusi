import { NavLink, Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Nav } from "react-bootstrap";
import 'animate.css'

export default function SkillsLayout(){


    const navLinkStyling = {

        color: 'white',
        fontSize: '1em',
        padding: 10,
        textDecoration: 'none',
        fontWeight: "bold",

    };

    const activeStyles = {

        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616",
        padding: 10,

    }


    return(

        <div className="home-div">

            <div className="home-content home-check animate__animated animate__bounceInLeft">


                <h1 className="skills-span-h1 animate__animated animate__fadeInLeft">
                    <span >Welcome to My</span> <br/> <span className="skills-span">Skills</span> and <span className="skills-span">Education</span>
                </h1>

            </div>

            <div>
            
                <Nav className="skills-nav" style={{display: 'flex', flexDirection:'row'}}>

                    <h4><NavLink to={'.'} end style={({ isActive }) => isActive ? activeStyles : navLinkStyling}>Skills</NavLink></h4>
                    <h4><NavLink to={'education'} style={({ isActive }) => isActive ? activeStyles : navLinkStyling}>Education</NavLink></h4> 

                </Nav>

                <div className="outlet-container"><Outlet /></div>

            </div>
            
        </div>
        
        
    )

}