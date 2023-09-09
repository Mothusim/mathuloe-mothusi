import { Link,} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from "react-bootstrap";
import '../App.css'
import Typography from "@mui/material/Typography";
import GithubIcon from '../assets/github.svg'
import linkedinIcon from '../assets/linkedin.svg'
import TwitterIcon from '../assets/twitter.svg'

const socialIcons = {

    width: '50%',
    height: '10vh',

    '@media(minWidth: 800px)':{

        width: '100%'
    }
}

export default function NavBar(){
      
      

    return(

        <>

            <nav className='navbar'>

                <Typography variant="h4" style={{color: 'lightgray', fontWeight: 'lighter'}}>
                
                    <span style={{color:'white',fontWeight: 'bold'}} >Mothusi</span> Mathuloe.
                    
                </Typography>

                <Nav className="nav">

                    <a href='https://github.com/Mothusim' target="_blank" rel="noreferrer"><img src={GithubIcon} style={socialIcons} alt="Github icon" /></a>
                    <a href='http://www.linkedin.com/in/mothusi-mathuloe' target="_blank" rel="noreferrer"><img src={linkedinIcon} style={socialIcons} alt="Linkedin icon" /></a>
                    <a href='#' target="_blank" rel="noreferrer"><img src={TwitterIcon} style={socialIcons} alt="Twitter icon" /></a>

                </Nav>


            </nav>

        </>
    )
}