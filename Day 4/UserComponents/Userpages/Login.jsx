import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../../../firebase/firebaseConfig';
import { useHistory } from "react-router-dom"
import '../Userstyles/Login.css'
function Login() {
    const history = useHistory();
    const handleGoogle = async () => {
        try {
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        console.log("Successfully signed in with Google", user);
        history.push({
            pathname: '/home',
        });
        } catch (error) {
        console.error("Error signing in with Google", error);
        }
    };
    return (
            <>
                <button onClick={handleGoogle} className="sign">Sign in with Google</button>
            </>
    );
}
export default Login;