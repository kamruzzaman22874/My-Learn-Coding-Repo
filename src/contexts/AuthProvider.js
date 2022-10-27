import React, { createContext, useEffect, useState} from 'react';
import {
	getAuth, createUserWithEmailAndPassword,
	signInWithEmailAndPassword, updateProfile,
	GoogleAuthProvider, signInWithPopup, GithubAuthProvider, onAuthStateChanged, signOut
} from 'firebase/auth';

import app from '../firebase/firebase.config';


export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	
	const googleProvider = new GoogleAuthProvider();
	const githubProvider = new GithubAuthProvider();
   
    const createNewUser = (email, password) => {
       return createUserWithEmailAndPassword(auth, email, password);
    }

    const userSignIn = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password); 
			
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

	const userprofile = (name, photoURL) => {
		return updateProfile(auth.currentUser, {
			displayName: name,
			photoURL: photoURL,
		});
	};

	useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
		});
		return () => {
			unSubscribe();
		};
	}, []);

	const logOut = () => {
		return signOut(auth);
	};

	const authInfo = {
		user,
		createNewUser,
		userSignIn,
		userprofile,
		updateUserProfile,
		googleSignUp,
		githubSignUp,
		logOut,
	};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
	);
};

export default AuthProvider;