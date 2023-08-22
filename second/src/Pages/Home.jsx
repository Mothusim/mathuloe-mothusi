import { Link } from "react-router-dom";
import Typography from '@mui/material/Typography'
import ProfilePic from '../assets/Image-normal.jpg'
import 'animate.css'



export default function Home(){

    return(

        <div className="home-div">

            

            <div className="home-content animate__animated animate__bounceInLeft">

            <Typography variant="h2" >WEB DEVELOPER</Typography>

                <Typography variant="P">

                    <span style={{fontSize: '1.5em', fontWeight: 'bold'}}>Hi there! 👋🏽</span> <br />
                    I am a web developer based in North West, South Africa. <br />
                    I create beautiful & functional websites for small businesses.

                </Typography>

            </div>
            
            <img src={ProfilePic} alt='profile picture' className="profile-pic animate__animated animate__bounceInUp" />
            
        </div>
        
        
    )

}