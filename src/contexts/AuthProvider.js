import React, { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';

import app from '../firebase/firebase.config';


export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    

    const createNewUser = (email, password) => {
       return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email , password) => {
        return signInWithEmailAndPassword(auth , email , password)
    }
    // const updateUserProfile = name => {
    //     updateProfile(auth.currentUser, {
	// 				displayName: name,
	// 				photoURL: photoURL,
	// 			})
	// 				.then(() => {
	// 				})
	// 				.catch((error) => console.error(error));
    // }



    const authInfo = {
			createNewUser,
			signIn,
		
		};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
	);
};

export default AuthProvider;