import '../styles/Signin.css'
import {Link} from 'react-router-dom'
import logo  from '../asset/logo.jpg'
function Signin() {
    return (
        <div className='sign-page'>
            <form className='box'>
                <h2><img src={logo} height={80} width={150}/><br/> Event_Manager</h2>
                <p>Get your events managed...</p>
                <input type='text' placeholder='Email' />
                <input type='password' placeholder='Password' />
                <Link to="/home"><button className='signin-button'>SignIn</button></Link>
                <button className='signin-button'>Continue With Google</button>
            </form>
        </div>
    )
}
export default Signin