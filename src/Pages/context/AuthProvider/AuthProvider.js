import React, { createContext, useEffect, useState } from 'react';
import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import app from '../../firebase/firebase.config'

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader]= useState();

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userSignin =(email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleUser = (Provider) =>{
        return signInWithPopup(auth, Provider)
    }

    const logOut = () =>{
        signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, createUser =>{
            setUser(createUser)
        });

        return ()=>{
            return unsubscribe();
        }

    },[])

    const authInfo= {user, createUser, userSignin, googleUser, logOut}

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;