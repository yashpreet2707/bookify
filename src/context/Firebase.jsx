import { initializeApp } from "firebase/app";
import { createContext, useContext, useState, useEffect } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

// creating the firebase context for usage
const FirebaseContext = createContext(null);

// this is the hook to be used
export const useFirebase = () => useContext(FirebaseContext);

const firebaseConfig = {
    apiKey: "AIzaSyARa-s5wW8lClQKeFhjTJ1h0p1jcYD_iLI",
    authDomain: "bookify-f755f.firebaseapp.com",
    projectId: "bookify-f755f",
    storageBucket: "bookify-f755f.firebasestorage.app",
    messagingSenderId: "388508147804",
    appId: "1:388508147804:web:8d3d3f00289e8bcd980699"
};

const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();
const firestore = getFirestore(firebaseApp)

export const FirebaseProvider = (props) => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(firebaseAuth, (user) => {
            if (user) {
                // user is logged in
                setUser(user);
            } else {
                // user is logged out
                setUser(null)
            }
        })
    }, []);

    const signupUserWithEmailAndPassword = (email, password) => {
        createUserWithEmailAndPassword(firebaseAuth, email, password);
    }
    const signinUserWithEmailAndPassword = (email, password) => {
        signInWithEmailAndPassword(firebaseAuth, email, password);
    }
    const signinWithGoogle = () => {
        signInWithPopup(firebaseAuth, googleProvider);
    }

    const logoutUser = () => {
        signOut(firebaseAuth);
    }

    const handleCreateNewLising = async (name, isbn, price) => {
        return await addDoc(collection(firestore, 'books'), {
            name,
            isbn,
            price,
            userId: user.uid,
            userEmail: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
        })
    }

    const listAllBooks = () => {
        return getDocs(collection(firestore, 'books'))
    }

    const isLoggedIn = (user) ? true : false

    return (
        <FirebaseContext.Provider value={{ signupUserWithEmailAndPassword, signinUserWithEmailAndPassword, signinWithGoogle, logoutUser, isLoggedIn, handleCreateNewLising, listAllBooks }}>
            {props.children}
        </FirebaseContext.Provider>
    )
}