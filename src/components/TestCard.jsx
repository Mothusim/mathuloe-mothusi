import Typography from '@mui/material/Typography';
import Marquee from "react-fast-marquee";
import head from '../assets/image-h-and-shoulder.jpg'


const testemonials = [

  // {
  //   'id': 1,
  //   'name': 'Paul Seffore',
  //   'company': 'Seffore Attorneys',
  //   'position': 'Director',
  //   'src': head,
  //   'quote': '"He is a very smart kid!"'
  // },
  {
    'id': 2,
    'name': 'Andrea Petersen',
    'company': 'Codespace Academy',
    'position': 'Personal Development Coach',
    'src': head,
    'quote': '"Mothusi is a values-driven go-getter with an entrepreneurial mindset and a tenacious attitude for learning."',
  },


]

export default function TestCard() {

  
  const teste = testemonials.map((testemonial) => (
    
    <div key={testemonial.id} className='testeCard'>
        
        

        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>

          <img src= {testemonial.src} alt={testemonial.name} style={{width:'50%', height:'20vh', borderRadius:'25px'}}/>

          <div>

            <Typography variant='subtitle1' style={{marginTop: '5%'}}>{testemonial.name}</Typography>
            <Typography variant='subtitle1'>Company: {testemonial.company}</Typography>
            <Typography variant='subtitle2'>Position: {testemonial.position}</Typography>

          </div>

        </div>

        <blockquote style={{marginTop:'2%', marginLeft: '5%'}}>{testemonial.quote}</blockquote>

    </div>

  ))

  return (

    <Marquee pauseOnHover className='marQ'>
      
        {teste}
     
    </Marquee>

  );

}