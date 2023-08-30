// import { NavLink } from "react-router-dom";
import TestCard from '../components/TestCard'


export default function Testemonials(){

    return(

        <div className='testMain'>

            <h3 className='testemonials-h3'>Testemonials</h3>

            <h6 className='testemonials-h6' style={{marginBottom:'5%', color:'white'}}>Check out what others are saying</h6>

            <div className='testContainer'>   

                <TestCard  />

            </div>

        </div>
    )
    
}