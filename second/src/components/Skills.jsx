import { Link } from "react-router-dom";
import Typography from '@mui/material/Typography'
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Nav } from "react-bootstrap";
import 'animate.css'



export default function Skills(){

    const navLinkStyling = {

        color: 'white',
        fontSize: '1em',
        padding: 10,
        textDecoration: 'none'

      };

    return(

        <div className="home-div">

            

            <div className="home-content animate__animated animate__bounceInLeft">

            <Typography variant="h2" >WEB DEVELOPER</Typography>

                {/* <Typography variant="P">

                    <span style={{fontSize: '1.5em', fontWeight: 'bold'}}>Hi there! 👋🏽</span> <br />
                    I am a web developer based in North West, South Africa. <br />
                    I create beautiful & functional websites for small businesses.

                </Typography> */}

            </div>
            
            {/* <Nav className="nav2" style={{display: 'flex', flexDirection:'column'}}>

                    <Link to={'.'} style={navLinkStyling}>Skills</Link>
                    <Link to={'education'} style={navLinkStyling}>Education</Link>
                    

            </Nav> */}
            
        </div>
        
        
    )

}