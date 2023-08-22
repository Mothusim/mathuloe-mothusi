import { Link,} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from "react-bootstrap";
import HomeIcon from '../assets/home.svg'
import ContactIcon from '../assets/contact.svg'
import TestemonialsIcon from '../assets/testemonials.svg'
import ProjectsIcon from '../assets/projects.svg'
import SkillsIcon from '../assets/skills.svg'
import '../App.css'


export default function NavBar(){

    const navLinkStyling = {

        color: 'white',
        fontSize: '1em',
        padding: 10,
        textDecoration: 'none'

      };

    return(

        <>

            <Navbar className='navbar2'  >


                <Nav className="nav2" style={{display: 'flex', flexDirection:'column'}}>

                    <Link to={'/'} style={navLinkStyling}><img src={HomeIcon} alt={'Home button'} className="NavIcons" /></Link>
                    <Link to={'contact'} style={navLinkStyling}><img src={ContactIcon} alt={'Contact button'} className="NavIcons" /></Link>
                    <Link to={'testemonials'} style={navLinkStyling}><img src={TestemonialsIcon} alt={'Testemonials button'} className="NavIcons" /></Link>
                    <Link to={'projects'} style={navLinkStyling}><img src={ProjectsIcon} alt={'Projects button'} className="NavIcons" /></Link>
                    <Link to={'skills'} style={navLinkStyling}><img src={SkillsIcon} alt={'Skills button'} className="NavIcons" /></Link>

                </Nav>

                

            </Navbar>

        </>
    )
}