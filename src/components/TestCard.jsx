import Typography from '@mui/material/Typography';
import andrea from '../assets/Andrea petersen.jpeg'
import seffore from '../assets/seffore logo.png'

const testimonials = [

  {
    'id': 1,
    'name': 'Paul Seffore',
    'company': 'Seffore Attorneys',
    'src': seffore,
    'quote': '"He only stops when the problem is solved"'
  },
  {
    'id': 2,
    'name': 'Andrea Petersen',
    'company': 'Codespace Academy',
    'src': andrea,
    'quote': '"Mothusi is a values-driven go-getter with an entrepreneurial mindset and a tenacious attitude for learning."',
  },


]

export default function TestCard() {

  
  const teste = testimonials.map((testimonial) => (
    
    <div key={testimonial.id} className='testeCard '>
        
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>

          <img  className='test-pic' src= {testimonial.src} alt={testimonial.name}/>

          <div style={{marginLeft: '5%'}}>

            <Typography variant='subtitle1' style={{marginTop: '5%', fontWeight:'bold'}}>{testimonial.name}</Typography>
            <Typography variant='subtitle1'>Company: {testimonial.company}</Typography>

          </div>

        </div>

        <blockquote style={{marginTop:'2%', marginLeft: '5%'}}>{testimonial.quote} </blockquote>

    </div>

  ))

  return (

    <div className='ss'>
    {teste}
    </div>

  );

}