// import About from "./About"
import Catalogue from "./Catalogue"
import Footer from "./Footer"
import Home from "./Home"
import MoreInfo from "./MoreInfo"
import pagelogo  from '../Userasset/pagelogo.png'
import Profile from './Profile'
import {FaUser} from 'react-icons/fa'
import { useState } from 'react'
import '../Userstyles/AllPages.css'
import BookEvent from "./BookEvent"
function AllPages() {
    const[profile,setProfile] = useState(false);
    const[home,setHome] = useState('');
    const[catalogue,setCatalogue] = useState('');
    const[moreinfo,setMoreinfo] = useState('');
    const[contact,setContact] = useState('');
    const[book,setBook] = useState('');
    const[page,setPage] = useState(true);
    const handlehome = () => {
        setHome(true);
        setCatalogue(false);
        setContact(false);
        setMoreinfo(false)
        setPage(false);
    }
    const handlecatalogue = () => {
        setCatalogue(true);
        setContact(false);
        setPage(false);
        setMoreinfo(false)
        setHome(false);
    }
    const handlemoreinfo = () => {
        setMoreinfo(true);
        setCatalogue(false);
        setPage(false);
        setContact(false);
        setHome(false);
    }
    const handlecontact = () => {
        setContact(true);
        setCatalogue(false);
        setHome(false);
        setPage(false);
        setMoreinfo(false)
    }
    if(!handlecatalogue && !handlecontact && !handlemoreinfo){
        setPage(true);
    }
    const handleBook = () => {
        setBook(true)
        setContact(false);
        setCatalogue(false);
        setHome(false);
        setPage(false);
        setMoreinfo(false)
    }
    return (
        <div className="allpage">
            <div className='nav-bars'>
                <img src={pagelogo} alt='logo' height={80} width={150} />
                <div className='nav-item'>
                    <button onClick={handlehome}>Home</button>
                    {/* <button onClick={handleabout}>About</button> */}
                    <button onClick={handlecatalogue}>Catalogue</button>
                    <button onClick={handlemoreinfo}>MoreInfo</button>
                    <button onClick={handlecontact}>Contact</button>
                    <button onClick={handleBook}>Book Now</button>
                    <div>
                        {/* <img src={pro} height={50} width={70}  onClick = {() => setProfile((prev) => !prev)}/> */}
                        <FaUser style={{"color":"white","cursor":"pointer"}} size={30} onClick = {() => setProfile((prev) => !prev)}/>
                        {profile && (
                            <Profile/>
                        )}
                    </div>
                </div>
            </div>
            {page && (
                <div>
                    <Home/>
                    {/* <About/> */}
                    <MoreInfo/>
                    <Catalogue/>
                    <Footer/>
                </div>
            )}
            {home && (
                <Home/>
            )}
            {catalogue && (
                <Catalogue/>
            )}
            {moreinfo && (
                <MoreInfo/>
            )}
            {contact && (
                <Footer/>
            )}
            {book && (
                <BookEvent/>
            )}
        </div>
    )
}

export default AllPages