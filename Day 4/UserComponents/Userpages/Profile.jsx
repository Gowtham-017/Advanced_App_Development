// import '../styles/Profile.css'
// import {Link} from 'react-router-dom'
// function Profile() {
//     return (
//         <div className="dropdown-profile">
//             <div className='profile-items'>
//                 <Link to="/"><button>Profile</button></Link>
//                 <Link to="/"><button>Settings</button></Link>
//                 <Link to="/"><button>LogOut</button></Link>
//             </div>
//         </div>
//     )
// }

// export default Profile



import '../Userstyles/Profile.css'
import {Link} from 'react-router-dom'
import UserDetail from './UserDetail';
function Profile() {
    return (
        <div className="dropdown-profile">
            <div className='profile-items'>
                <UserDetail/>
                <Link to="/"><button>Profile</button></Link>
                <Link to="/"><button>Settings</button></Link>
                <Link to="/"><button>LogOut</button></Link>
            </div>
        </div>
    )
}

export default Profile



