import { Link,} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from "react-bootstrap";
import '../App.css'
import Typography from "@mui/material/Typography";
import GithubIcon from '../assets/github.svg'
import linkedinIcon from '../assets/linkedin.svg'
import TwitterIcon from '../assets/twitter.svg'


export default function NavBar(){
      
      

    return(

        <>

            <nav className='navbar'>

                <Typography variant="h4" style={{color: 'lightgray', fontWeight: 'lighter'}}>
                
                    <span style={{color:'white',fontWeight: 'bold'}} >Mothusi</span> Mathuloe.
                    
                </Typography>

                <Nav className="nav">

                    <a href='#'><img src={GithubIcon} alt="Github icon" /></a>
                    <a href='#'><img src={linkedinIcon} alt="Linkedin icon" /></a>
                    <a href='#'><img src={TwitterIcon} alt="Twitter icon" /></a>

                </Nav>


            </nav>

        </>
    )
}