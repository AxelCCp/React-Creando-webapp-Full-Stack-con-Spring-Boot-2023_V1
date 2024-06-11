import { createSlice } from "@reduxjs/toolkit";

//254

const initialLogin = JSON.parse(sessionStorage.getItem('login')) || {
    isAuth: false,
    isAdmin: false,
    user: undefined,
}

export const authSlice = createSlice({
    name : 'auth',                                                      //254 - se le da un nombre a este slice.
    initialState : initialLogin,
    reducers : {
        onLogin : (state, action) => {
            state.isAuth = true;
            state.isAdmin = action.payload.isAdmin;
            state.user = action.payload.user;
        },

        onLogOut : (state) => {
            state.isAuth = false;
            state.isAdmin = false;
            state.user = undefined;
        }
    }
});

export const {onLogin, onLogOut} = authSlice.actions;