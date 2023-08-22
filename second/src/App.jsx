import './App.css'
import { createContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import ContactUs from './Pages/ContactUs'
import Testemonials from './Pages/Testemonials'
import Projects from './Pages/Projects'
import AppLayout from './layouts/AppLayout'
import ProjectsLayout from './layouts/ProjectsLayout'
import ProjectDescription from './components/ProjectDescription'
import ProjectTech from './components/ProjectTech'
import ProjectImages from './components/ProjectImages'
import data from './data'
import Skills from './components/Skills'
import SkillsLayout from './layouts/SkillsLayout'
import Education from './components/Education'

const dataContext = createContext()


function App() {

  return (

    <>

      <dataContext.Provider value={{data}}>
    
        <BrowserRouter>

          <Routes>

            <Route path='/' element={<AppLayout />}>

              <Route index element={<Home />} />
              <Route path='contact' element={<ContactUs />} />
              <Route path='testemonials' element={<Testemonials />} />
              <Route path='projects' element={<Projects />} />
              <Route path='projects/:id' element={<ProjectsLayout />}>

                <Route index element={<ProjectDescription />} />
                <Route path='tech' element={<ProjectTech />} />
                <Route path='images' element={<ProjectImages />} />

              </Route>

              <Route path='skills' element={<SkillsLayout />}>

                <Route index element={<Skills />} />
                <Route path='education' element={<Education />} />

              </Route>

            </Route>


          </Routes>

        </BrowserRouter>

      </dataContext.Provider>
      
    </>

  )

}

export default App
