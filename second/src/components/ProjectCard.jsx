import Typography from '@mui/material/Typography';

export default function ProjectCard({testemonial}) {

  return (

    <>
      
      
        
        <div className='projectCard animate__animated animate__fadeInLeft' style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}}>

          <img src={testemonial.src} alt={testemonial.name} style={{width:'100%', height:'20vh', borderRadius:'25px 25px 0 0 ', marginBottom:'1.5%'}}/>

          <div>

            <Typography variant='subtitle1' style={{paddingLeft:'5%', marginTop:'5%', fontWeight:'bolder', fontSize:'1.5em'}}>Project: {testemonial.name}</Typography>
           
          </div>

        </div>

    

    </>

  );

}