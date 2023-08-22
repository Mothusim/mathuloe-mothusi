import {NavLink, Outlet} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function ProjectsLayout(){

    return(

        <>

            <NavLink to='.' >Description </NavLink>
            <NavLink to='tech' >Tech-stack</NavLink>
            <NavLink to='images' >Images</NavLink>

            <Outlet />

        </>

    )

}