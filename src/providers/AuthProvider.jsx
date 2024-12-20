import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase-config/firebase.config";
import { createContext, useEffect, useState } from "react";

const auth = getAuth(app);

export const AuthContext = createContext(null);
export const GoogleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    // sign-up 
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // log-in 
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    //google-logIn
    const googleSignIn = () => {
        return signInWithPopup(auth, GoogleProvider);
    }

    // log-out 
    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        loading,
        createUser,
        signIn,
        googleSignIn,
        logOut,
        user,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;