import ProjectCard from "../components/ProjectCard"

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