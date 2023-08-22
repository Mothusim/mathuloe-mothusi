import {Outlet} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SideNav from '../components/SideNav'

export default function AppLayout(){

    return(

        <>

            <Navbar />

            <SideNav />

            <main>

                <Outlet />
                
            </main>

        </>

    )

}