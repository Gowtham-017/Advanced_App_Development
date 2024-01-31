import '../styles/Landingpage.css'
import lp from '../asset/lp.png'
import { useState } from 'react'
import Signin from './Signin';
function Landingpage() {
    const[signpage,setSignPage] = useState(false);
    const handlePage = () => {
        setSignPage(true);
    }
    return (
        <div className="landing-page">
            <div className='landing-item'>
                <h1>Delightful <br/>Events</h1><br/>
                <p>starts here</p><br/>
                <button className='get-start-button' onClick={handlePage}>Create Your Events</button>
            </div>
            <img src={lp} width={700} height={700} className='page-image'/>
            <div>
                {signpage &&
                <div className="over">
                    <Signin/>
                </div>
                }
            </div>
        </div>
    )
}
export default Landingpage