import '../styles/Home.css'
import logo  from '../asset/logo.jpg'
import Footer from './Footer'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
const Home = () => {
    return (
        <div id="home">
            <div className="home-page">
                <div className='nav-bar'>
                    <img src={logo} alt='logo' height={60} width={80} />
                    <div className='nav-items'>
                        <Link to=""><a href='' ><h5>Home</h5></a></Link>
                        <a href='/about' target='_blank'><h5>About</h5></a>
                        <Link to="/events"><a href='' ><h5>Events</h5></a></Link>
                        <Link to=""><a href='' ><h5>Catalogue</h5></a></Link>
                    </div>
                </div>
                <div className='home-side'>
                    <div className='home-content'>
                        <h2>Seamless Event Management, Anytime, Anywhere</h2>
                        <p>Wherever, whenever - redefining event management effortlessly</p><br />
                        <div className='buttons'>
                            <button className='getstarted' onClick={'handleGetStarted'}>Get Started</button>
                        </div>
                    </div>
                    <div className='himg'>
                        <img src={logo} alt='home' height={50}  width={50}/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Home