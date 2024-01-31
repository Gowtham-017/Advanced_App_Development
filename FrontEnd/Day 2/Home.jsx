import '../styles/Home.css'
import logo  from '../asset/logo.jpg'
import Footer from './Footer'
const Home = () => {
    return (
        <div id="home">
            <div className="home-page">
                <div className='nav-bar'>
                    <img src={logo} alt='logo' height={60} width={80} />
                    <div className='nav-items'>
                        <a href='#home' ><h5>Home</h5></a>
                        <a href='' ><h5>About</h5></a>
                        <a href='' ><h5>Events</h5></a>
                        <a href='' ><h5>Catalogue</h5></a>
                        <a href='' ><h5>Contact</h5></a>
                    </div>
                </div>
                <div className='home-side'>
                    <div className='home-content'>
                        <h2>Seamless Event Management, Anytime, Anywhere</h2>
                        <p>Wherever, whenever - redefining event management effortlessly</p><br />
                        <div className='buttons'>
                            <button className='getstarted' onClick={'handleGetCatalogue'}>Go to Catalogue</button>
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