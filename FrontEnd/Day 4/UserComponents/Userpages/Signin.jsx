// import '../styles/Signin.css'
// import {Link} from 'react-router-dom'
// import logo  from '../asset/logo.jpg'
// // import { GoogleAuthProvider,signInWithRedirect } from "firebase/auth";
// import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";
// import { auth } from '../../../firebase/firebaseConfig';
// import { useHistory } from "react-router-dom"
// function Signin() {
//     const history = useHistory();
//     const handleGoogle = async () => {
//         try {
//         const provider = new GoogleAuthProvider();
//         // const result = await signInWithRedirect(auth, provider);
//         const result = await signInWithPopup(auth, provider);
//         const user = result.user;
//         console.log("Successfully signed in with Google", user);
//         history.push({
//             pathname: '/home',
//         });
//         } catch (error) {
//         console.error("Error signing in with Google", error);
//         }
//     };
//     return (
//         <div className='sign-page'>
//             <div>
//             <form className='box'>
//                 <h2><img src={logo} height={80} width={150}/><br/> Event_Manager</h2>
//                 <p>Get your events managed...</p>
//                 <input type='text' placeholder='Email' />
//                 <input type='password' placeholder='Password' />
//                 <Link to="/home"><button className='signin-button'>SignIn</button></Link>
//             </form>
//             </div>
//             <div className='gooo'>
//             <button onClick={handleGoogle} className="google-signin-button">Sign in with Google</button>
//             </div>
//         </div>
//     )
// }
// export default Signin




// import { GoogleAuthProvider ,signInWithPopup} from "firebase/auth";
// import {auth} from '../../../firebase/firebaseConfig';
// function Signin() {
//     const handleGoogle = async () => {
//         const provider = await new GoogleAuthProvider();
//         console.log("success")
//         return signInWithPopup(auth,provider)
//     }
//     return (
//         <div className="App">
//             <div className="card">
//                 <>
//                     <button onClick={handleGoogle}>Sign in with Google</button>
//                 </>
//             </div>
//         </div>
//     );
//     }

// export default Signin;


// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { auth } from '../../../firebase/firebaseConfig';
// import { useHistory } from "react-router-dom"
// function Signin() {
//     const history = useHistory();
//     const handleGoogle = async () => {
//         try {
//         const provider = new GoogleAuthProvider();
//         const result = await signInWithPopup(auth, provider);
//         const user = result.user;
//         console.log("Successfully signed in with Google", user);
//         history.push({
//             pathname: '/home',
//         });
//         } catch (error) {
//         console.error("Error signing in with Google", error);
//         }
//     };
//     return (
//             <>
//                 <button onClick={handleGoogle}>Sign in with Google</button>
//             </>
//     );
// }
// export default Signin;










// import '../styles/Signin.css'
// import {Link} from 'react-router-dom'
// import logo  from '../asset/logo.jpg'
// import {FaGoogle} from 'react-icons/fa'
// // import { GoogleAuthProvider,signInWithRedirect } from "firebase/auth";
// import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";
// import { auth } from '../../../firebase/firebaseConfig';
// import { useHistory } from "react-router-dom"
// function Signin() {
//     const history = useHistory();
//     const handleGoogle = async () => {
//         try {
//         const provider = new GoogleAuthProvider();
//         // const result = await signInWithRedirect(auth, provider);
//         const result = await signInWithPopup(auth, provider);
//         const user = result.user;
//         console.log("Successfully signed in with Google", user);
//         history.push({
//             pathname: '/home',
//         });
//         } catch (error) {
//         console.error("Error signing in with Google", error);
//         }
//     };
//     return (
//         <div className='sign-page'>
//             <div>
//             <form className='box'>
//                 <h2><img src={logo} height={80} width={150}/><br/> Event_Manager</h2>
//                 <p>Get your events managed...</p>
//                 <input type='text' placeholder='Email' />
//                 <input type='password' placeholder='Password' />
//                 <Link to="/home"><button className='signin-button'>SignIn</button></Link>
//             </form>
//             </div>
//             <div className='gooo'>
//             <button onClick={handleGoogle} className="google-signin"><FaGoogle/> Sign in with Google </button>
//             </div>
//         </div>
//     )
// }
// export default Signin










import '../Userstyles/Signin.css';
import logo from '../Userasset/logo.jpg';
import { FaGoogle } from 'react-icons/fa';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../../../firebase/firebaseConfig';
import { useHistory } from 'react-router-dom';
import {Link} from 'react-router-dom'
function Signin() {
    const history = useHistory();
    const handleGoogle = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            console.log("Successfully signed in with Google", user);
            const userData = {
                username: user.displayName || 'User',
                useremail: user.email || '',
                userpicture: user.photoURL || '',
            };
            history.push({
                pathname: '/all',
                state: { userData },
            });
        } catch (error) {
            console.error("Error signing in with Google", error);
        }
    };
    return (
        <div className='sign-page'>
            <div>
                <form className='box'>
                    <h2><img src={logo} height={80} width={150} /><br /> Event_Manager</h2>
                    <p>Get your events managed...</p>
                    <input type='text' placeholder='Email' />
                    <input type='password' placeholder='Password' />
                    <Link to="/all"><button  className='signin-button'>SignIn</button></Link>
                </form>
            </div>
            <div className='gooo'>
                <button onClick={handleGoogle} className="google-signin"><FaGoogle /> Sign in with Google </button>
            </div>
        </div>
    );
}
export default Signin;












