import { createSlice } from "@reduxjs/toolkit";

//254

const initialLogin = JSON.parse(sessionStorage.getItem('login')) || {
    isAuth: false,
    isAdmin: false,
    user: undefined,
    isLoginLoading: false
}

export const authSlice = createSlice({
    name : 'auth',                                                      //254 - se le da un nombre a este slice.
    initialState : initialLogin,
    reducers : {
        onLogin : (state, action) => {
            state.isAuth = true;
            state.isAdmin = action.payload.isAdmin;
            state.user = action.payload.user;
            state.isLoginLoading = false;                   //275
        },

        onLogOut : (state) => {
            state.isAuth = false;
            state.isAdmin = false;
            state.user = undefined;
            state.isLoginLoading = false;   //275
        },

        onInitLogin : (state) => {
            state.isLoginLoading = true;
        }
    }
});

export const {onLogin, onLogOut, onInitLogin} = authSlice.actions;