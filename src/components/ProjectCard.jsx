import { useState } from "react";

export default function ProjectCard({project}) {

  const [showMore, setShowMore] = useState(false);

  const toggleDescription = () => {
    setShowMore(!showMore);
  };

  const descriptionToShow = showMore
    ? project.description
    : project.description.slice(0, 50);

  return (

    <>
        
          <div className='projectCard animate__animated animate__fadeInLeft' style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}}>

            <img src={project.src} alt={project.name} style={{width:'100%', height:'20vh', borderRadius:'25px 25px 0 0 ', marginBottom:'1.5%'}}/>

            <div>

              <h6 style={{paddingLeft:'5%', marginTop:'5%', fontWeight:'bolder', fontSize:'1.2em', color: 'purple'}}>Project: {project.name}</h6>
              <p style={{ paddingLeft: '5%', marginTop: '5%', fontWeight: 'bolder', fontSize: '1em', }}>

                Description: {descriptionToShow}

              </p>

              <div>

                {project.description.length > 50 && (

                  <button onClick={toggleDescription} className="showMore-btn">

                    {showMore ? 'Show Less' : 'Show More'}

                  </button>

                )}

                <button className="showMore-btn">

                  <a href={project.link} target="_blank" rel='noreferrer'>Visit project</a>
                
                </button>

              </div>
                            
            </div>

          </div>
    
    </>

  );

}