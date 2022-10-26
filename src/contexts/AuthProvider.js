import React, { createContext, useEffect, useState} from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, onAuthStateChanged} from 'firebase/auth';

import app from '../firebase/firebase.config';


export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState('')
	const [loading , setLoading] = useState(false)
	
	const googleProvider = new GoogleAuthProvider();
	const githubProvider = new GithubAuthProvider();
   
    const createNewUser = (email, password) => {
       return createUserWithEmailAndPassword(auth, email, password);
    }
	const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth , email , password)
	}
	const updateUserProfile = (profile) => {
	 return	updateProfile(auth.currentUser, profile);
	};
	const googleSignUp = () => {
	return	signInWithPopup(auth, googleProvider);
	}
	const githubSignUp = () => {
	return	signInWithPopup(auth, githubProvider)
	}

	useEffect(() => {
	const unsubscibe = onAuthStateChanged(auth, (currentUser) => {
		setUser(currentUser);
		setLoading(false);
	});
		return () => {
			unsubscibe();
		};
	} ,[])
	const authInfo = {
			user,
			createNewUser,
			signIn,
			updateUserProfile,
			googleSignUp,
			githubSignUp,
	};
	console.log(user);
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
	);
};

export default AuthProvider;