import { initializeApp } from "firebase/app";
import { createContext } from "react";

// creating the firebase context for usage
const FirebaseContext = createContext(null);

// this is the hook to be used
export const useFirebase = () =>  useContext(FirebaseContext);

const firebaseConfig = {
    apiKey: "AIzaSyARa-s5wW8lClQKeFhjTJ1h0p1jcYD_iLI",
    authDomain: "bookify-f755f.firebaseapp.com",
    projectId: "bookify-f755f",
    storageBucket: "bookify-f755f.firebasestorage.app",
    messagingSenderId: "388508147804",
    appId: "1:388508147804:web:8d3d3f00289e8bcd980699"
};

const firebaseApp = initializeApp(firebaseConfig)


export const FirebaseProvider = (props) => {
    return (
        <FirebaseContext.Provider>
            {props.children}
        </FirebaseContext.Provider>
    )
}