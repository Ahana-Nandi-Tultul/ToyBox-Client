import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

const auth = getAuth(app)
export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(false);

    const createUser = (email, password) => {
        setLoading(false)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const login = (email, password) => {
        setLoading(false);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const loginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const logout = () => {
        return signOut(auth);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setLoading(false);
            setUser(currentUser);
            // console.log(currentUser)
            if(currentUser && currentUser.email){
                const loggedUser = {
                    email : currentUser.email
                }
                fetch('https://toy-master-server.vercel.app/jwt', {
                    method: "POST",
                    headers: {
                        "content-type" : "application/json"
                    },
                    body: JSON.stringify(loggedUser)
                })
                .then(res => res.json())
                .then(data => {
                    // console.log('toyBox Access Token', data)
                    localStorage.setItem('toyBox-access-token', data.token)

                })
            }
        })

        return () => unsubscribe()
    },[])

    const updateUserInfo = (userInfo) => {
        setLoading(false)
        return updateProfile(auth.currentUser, userInfo)
    }


    const authInfo = {
        user,
        loading,
        createUser,
        updateUserInfo,
        login,
        logout,
        open,
        setOpen,
        loginWithGoogle
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;