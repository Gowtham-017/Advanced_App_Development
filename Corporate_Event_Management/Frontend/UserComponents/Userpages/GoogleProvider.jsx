import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBfRZKqggZqapuRfTKOlJ29HDLMZUecH0Y",
    authDomain: "events-79eaa.firebaseapp.com",
};

const app = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
export const auth = getAuth(app);

export const signInWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;
        console.log("user", user);
    } catch (err) {
        console.error(err);
    }
};