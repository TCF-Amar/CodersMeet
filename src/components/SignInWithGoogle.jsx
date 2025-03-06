import React from 'react'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { doc, setDoc } from "firebase/firestore"
import { firebaseAuth, firestore } from '../configs/firebase'
import google from "../assets/google.png"

function SignInWithGoogle() {
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider()
    try {
      const result = await signInWithPopup(firebaseAuth, provider)
      const user = result.user

      await setDoc(doc(firestore, "users", user.uid), {
        email: user.email,
        displayName: user.displayName,
        username: user.email.split("@")[0],
        photoURL: user.photoURL || "",
        createdAt: new Date().toISOString(),
        lastLogin: new Date().toISOString(),
        authProvider: "google"
      }, { merge: true }) // Merge use karne se existing data overwrite nahi hoga

    } catch (error) {
      console.error('Google Sign-In Failed:', error.message)
    }
  }

  return (
    <button 
      onClick={handleGoogleSignIn} 
      className='flex items-center space-x-2 w-full justify-center border border-gray-300 rounded-md p-2 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-200'>
      <img src={google} className="w-6 h-6" alt="Google Logo" />
      <span>Sign in with Google</span>
    </button>
  )
}

export default SignInWithGoogle
