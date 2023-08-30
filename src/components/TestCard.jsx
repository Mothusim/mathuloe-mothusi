import Typography from '@mui/material/Typography';
import Marquee from "react-fast-marquee";


const testemonials = [

  {
    'id': 1,
    'name': 'Mothusi',
    'company': 'XYZ',
    'position': 'Director',
    'src': 'src/assets/image-h-and-shoulder.jpg',
    'quote': '"He is a very smart kid!"'
  },
  {
    'id': 2,
    'name': 'Spha',
    'company': 'Yoyo',
    'position': 'Accountant',
    'src': 'src/assets/image-h-and-shoulder.jpg',
    'quote': '"I really loved working with him"',
  },


]

export default function TestCard() {

  
  const teste = testemonials.map((testemonial) => (
    
    <div key={testemonial.id} className='testeCard'>
        
        

        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>

          <img src={testemonial.src} alt={testemonial.name} style={{width:'50%', height:'20vh', borderRadius:'25px'}}/>

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