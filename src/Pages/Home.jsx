import ProfilePic from '../assets/Image-normal.jpg'
import 'animate.css'
  
export default function Home(){

    return(

        <div className="home-div">

            <div className="home-content animate__animated animate__fadeInLeft">

                <h2 className='home-h2'>WEB DEVELOPER</h2>

                <h5 className='home-h5'>Hi there! 👋🏽</h5>

                <p className='home-p'>

                    I am a web developer based in North West, South Africa.
                    I create beautiful & functional websites for small businesses.

                </p>

            </div>
            
            <img src={ProfilePic} alt='profile picture'  className="profile-pic animate__animated animate__fadeInUp" />
            
        </div>
        
    )

}