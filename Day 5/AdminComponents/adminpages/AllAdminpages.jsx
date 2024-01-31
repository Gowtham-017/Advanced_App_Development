
import { useState } from 'react'
import '../adminstyles//AllAdminPage.css'
import {FaUser} from 'react-icons/fa'
import AdminProfile from './AdminProfile'
import AdminHome from './AdminHome'
import AdminEvents from './AdminEvents'
import AdminDashBoard from './AdminDashBoard'
import logo from '..//adminasset/lll.png'
function AllAdminpages() {
    const[adminpage,setAdminPage] = useState(false);
    const[adminhome,setAdminHome] = useState('');
    const[adminevent,setEvent] = useState('');
    const[admindashboard,setDashBoard] = useState('');
    const[adminprofile,setAdminProfile] = useState(false);
    const handleAdminhome = () => {
        setAdminHome(true);
        setEvent(false);
        setDashBoard(false);
    }
    const handleAdminEvent = () => {
        setAdminHome(false);
        setEvent(true);
        setDashBoard(false);
    }
    const handleAdminDash = () => {
        setAdminHome(false);
        setEvent(false);
        setDashBoard(true);
    }
    if(!handleAdminEvent && !handleAdminDash && !handleAdminhome){
        setAdminPage(true);
    }
    return (
        <div className="allpage">
            <div className='navbars'>
                <img src={logo}  height={75} width={100} />
                <div className='nav-item'>
                    <button onClick={handleAdminhome}>Home</button>
                    <button onClick={handleAdminEvent}>Events</button>
                    <button onClick={handleAdminDash}>DashBoard</button>
                    <div>
                        {/* <img src={pro} height={50} width={70}  onClick = {() => setProfile((prev) => !prev)}/> */}
                        <FaUser style={{"color":"white","cursor":"pointer"}} size={30} onClick = {() => setAdminProfile((prev) => !prev)}/>
                        {adminprofile && (
                            <AdminProfile/>
                        )}
                    </div>
                </div>
            </div>
            {adminpage && (
                <div>
                    <AdminHome/>
                </div>
            )}
            {adminhome && (
                <AdminHome/>
            )}
            {adminevent && (
                <AdminEvents/>
            )}
            {admindashboard && (
                <AdminDashBoard/>
            )}
        </div>
    )
}

export default AllAdminpages