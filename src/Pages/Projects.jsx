import ProjectCard from "../components/ProjectCard"
import head from '../assets/image-h-and-shoulder.jpg'

const testemonials = [

    {
      'id': 1,
      'name': 'Mothusi',
      'company': 'XYZ',
      'position': 'Director',
      'src': head,
      'quote': '"He is a very smart kid!"'
    },
    {
      'id': 2,
      'name': 'Spha',
      'company': 'Yoyo',
      'position': 'Accountant',
      'src': head,
      'quote': '"I really loved working with him"',
    },
  
  
  ]

export default function Projects(){

    const teste = testemonials.map((testemonial) => (
    
        <div className="project-card-div" key={testemonial.id}>

            <ProjectCard  testemonial = {testemonial} /> 

        </div>
    
    ))

    return(

        <div className='projectContainer'>

           {teste}

        </div>
    )
    
}