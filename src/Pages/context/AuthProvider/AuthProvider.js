import React, { createContext, useEffect, useState } from 'react';
import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut, onAuthStateChanged, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config'

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader]= useState(true);

    const createUser = (email, password) =>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userSignin =(email, password) =>{
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleUser = (Provider) =>{
        setLoader(true)
        return signInWithPopup(auth, Provider)
    }

    const updateUserProfile = (profile) =>{
        updateProfile(auth.currentUser, profile);
    }

    const logOut = () =>{
        setLoader(true)
        signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, createUser =>{
            setUser(createUser);
            setLoader(false);
        });

        return ()=>{
            return unsubscribe();
        }

    },[])

    const authInfo= {user,loader, createUser, userSignin, googleUser, updateUserProfile, logOut}

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;