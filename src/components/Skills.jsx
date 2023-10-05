import {

  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaBootstrap,
  FaGit,
  FaGithub,
  FaSlack,
} from "react-icons/fa";

import ReactRouterIcon from '../assets/react-router.svg'
import VSCodeIcon from '../assets/vscode.svg'

const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 key="html5" className="skillsIcon"/>,
          <FaCss3 key="css3" className="skillsIcon"/>,
          <FaJs key="js" className="skillsIcon"/>,
          <FaReact key="react" className="skillsIcon"/>,
          <FaBootstrap key='bootstrap' className="skillsIcon"/>,
          <img key='react-router-icon' src={ReactRouterIcon} className="imgIcon"/>,
        ],
      },
      
    ],
  },

];

const softwaresData = [

    <img key='react-router-icon' src={VSCodeIcon} className="imgIcon"/>,
    <FaGit key='git' className="skillsIcon"/>,
    <FaGithub key='github' className="skillsIcon"/>,
    <FaFigma key="figma" className="skillsIcon"/>,
    <FaSlack key='slack' className="skillsIcon"/>,
    
]

const softSkillsData = [

    'Communication skills',
    'Problem solving',
    'Teamwork',
    'Presentation skills',
    'Learning agility',
    'Leadership skills',
    'Detail oriented',
    'Time management',
]

const Skills = () => {
  return (
    <div className="about-container">

        <div className="skill-type">
      
            {aboutData.map((section) => (
                
                <div key={section.title} className="tech-skills-section">
                
                    <ul className="tech-skills-list">

                        {section.info.map((infoItem, index) => (
                          <div key={index}>
                          <h5 className="skills-h5">{infoItem.title}</h5>
                            <li className="tech-skills-info-item animate__animated animate__fadeInLeft" >

                                
                                
                                <div className="icon-container">

                                    {infoItem.icons &&
                                        infoItem.icons.map((icon, iconIndex) => (
                                        <span key={iconIndex} className="icon">
                                            {icon}
                                        </span>
                                    ))}

                                </div>

                            </li>
                            </div>

                        ))}

                    </ul>

                </div>
            ))}


            <div className="soft-skills-section">
                
                <h5 className="softwares-skills-h5">Softwares</h5>

                <ul className="soft-skills-container soft-skills-list" >

                    {softwaresData.map((softSkill, index) => (

                      <li key={index} className="animate__animated animate__fadeInRight">{softSkill}</li>

                    ))}

                </ul>

            </div>

            <div className="soft-skills-section">
                
                <h5 className="soft-skills-h5">Soft Skills</h5>

                <ul className="soft-skills-container soft-skills-list" >

                    {softSkillsData.map((softSkill, index) => (

                        

                            <li key={index} className="soft-skills-item animate__animated animate__fadeInDown">{softSkill}</li>

                        
                    ))}

                </ul>

            </div>

      </div>

    </div>

  );

};

export default Skills;
