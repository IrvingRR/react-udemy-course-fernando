import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FirebaseAuth } from "../firebase/config";
import { login, logout } from "../redux/auth";
import { startLoadingNotesThunk } from "../redux/journal";

export const useCheckAuth = () => {

    const { status } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {

        onAuthStateChanged(FirebaseAuth, async (user) => {
        
            if(!user) return dispatch(logout());

            const { uid, displayName, email, photoURL } = user;

            dispatch(login({ uid, displayName, email, photoURL }));
            dispatch(startLoadingNotesThunk());

        });

    }, []);

    return { status };

};