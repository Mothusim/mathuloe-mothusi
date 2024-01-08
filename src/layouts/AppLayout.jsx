import {Outlet} from 'react-router-dom'
import Navbar from '../components/Navbar'
import SideNav from '../components/SideNav'
import { BubbleChat } from 'flowise-embed-react'

export default function AppLayout(){

    return(

        <>

            <Navbar />

            <SideNav />

            <main>

                <Outlet />
                
            </main>
            <BubbleChat chatflowid="858d9e66-48ee-4c27-8da0-42a05d358802" apiHost="https://flowise-f0nl.onrender.com" />


        </>

    )

}