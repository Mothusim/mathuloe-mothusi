import ProjectCard from "../components/ProjectCard"
import atumPod from '../assets/podcast pic.png'
import bookConnect from '../assets/book-connect.png'
import roboBoxing from '../assets/robo boxing.png'

const projects = [

    {
      'id': 1,
      'name': 'AtumPod',
      'src': atumPod,
      'link': 'https://atumpod.netlify.com/',
      'description': 'Podcast app allowing users to login and log out, browse various podcast shows,play episodes, and track their favorite episodes.'
    },
    {
      'id': 2,
      'name': 'Book Connect',
      'src': bookConnect,
      'link': 'https://book-connect.netlify.com/',
      'description': 'This is a web application built with Javascript, HTML, and CSS that allows users to discover new books, view book previews, and filter books by author and genre. The app also features a dark mode for comfortable reading at night.',
    },
    {
      'id': 3,
      'name': 'Robo Boxing 2K22',
      'src': roboBoxing,
      'link': 'https://scratch.mit.edu/projects/766553525',
      'description': 'This is a Scratch 3.0 boxing game that has robot as boxers instead of humans.',
    },
  
  
  ]

export default function Projects(){

    const teste = projects.map((project) => (
    
        <div className="project-card-div" key={project.id}>

            <ProjectCard  project = {project} /> 

        </div>
    
    ))

    return(

        <div className='projectContainer'>

           {teste}

        </div>
    )
    
}