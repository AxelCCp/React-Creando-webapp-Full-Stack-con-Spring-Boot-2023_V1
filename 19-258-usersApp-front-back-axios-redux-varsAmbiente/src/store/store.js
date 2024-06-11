import { configureStore } from "@reduxjs/toolkit";
import { usersSlice } from "./slices/users/usersSlice";
import { authSlice } from "./slices/auth/authSlice";

//248 - con redux se va a migrar desde el usecontext a redux.
//aqui se configura el almacenamiento de redux para cada uno de los modulos o componentes.

//249 - la configuracion de redux se realiza en UsersApp, donde se sacan las rutas y se mandan al nuevo archivo AppRoutes.

export const store = configureStore({
    reducer : {
        users : usersSlice.reducer,                     //users: este es el nombre que se le puso en usersSlice al usar la funcion createSlice().
        auth : authSlice.reducer,                       //auth : este es el otro slice q se creo.
    }
});