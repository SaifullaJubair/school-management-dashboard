import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
export const AuthContext = createContext()
const auth = getAuth(app)


const AuthProvider = ({ children }) => {
   const [loading, setLoading] = useState(true)
   const [user, setUser] = useState(null)

   //create user 
   const createUser = (email, password) => {
      setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password)
   }

   //login with email
   const signIn = (email, password) => {
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password)
   }

   //google signIn
   const provider = new GoogleAuthProvider()
   const signInGoogle = () => {
      setLoading(true)
      return signInWithPopup(auth, provider)
   }


   useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, currentUser => {
         setUser(currentUser)
         setLoading(false)
      });
      return () => unSubscribe();
   }, [])

   //logout
   const logOut = () => {
      setLoading(true)
      return signOut(auth)
   }

   const updateUser = (userInfo) => {

      return updateProfile(auth.currentUser, userInfo)
   }



   const authInfo = {
      user,
      createUser,
      signIn,
      logOut,
      updateUser,
      signInGoogle,
      loading
   }
   return (
      <div>
         <AuthContext.Provider value={authInfo}>
            {children}
         </AuthContext.Provider>
      </div>
   );
};

export default AuthProvider;