import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
} from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthProvider);
}

export function AuthProvider({ children }) {
    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState({});

    useEffect(() => {
        const auth = getAuth();
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unSubscribe;
    }, []);

    //signup function
    async function signup(email, password, username) {
        const auth = getAuth();

        await createUserWithEmailAndPassword(auth, email, password);

        await updateProfile(auth.currentUser, { displayName: username });

        const user = auth.currentUser;

        setCurrentUser({
            ...user,
        });
    }

    // login function
    function login(email, password) {
        const auth = getAuth();
        return signInWithEmailAndPassword(auth, email, password);
    }

    // logout function
    function logout() {
        const auth = getAuth();
        return signOut(auth);
    }

    // provided value
    const value = {
        currentUser,
        signup,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}