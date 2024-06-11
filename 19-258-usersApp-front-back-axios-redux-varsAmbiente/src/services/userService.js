import axios from "axios"
import usersApi from "../apis/usersApi";

const BASE_URL = ''; //244


export const findAll = async() => {
    try {
        const response = await usersApi.get(BASE_URL);                    
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
}


export const save = async ({username, email, password, admin}) => {                         //se pasa el user desestructurado. la funcion debe ser asincrona ya q se comunica en el api del back.

    try {
        return await usersApi.post(BASE_URL, {                                               //el post recibe la ruta y el obj.
            username : username,
            email : email,
            password : password,
            admin : admin,
        });
    } catch (error) {
        console.error(error);
        throw error;
    }
    
} 


export const update = async ({id, username, email, admin}) => {

    try {
        return await usersApi.put(`${BASE_URL}/${id}`, {
            username,
            email,
            admin,
            //password: 'nothing',         //se pone un password provisorio, para q la validacion del password no webee al editar un usuario (esta es un solucion desde front). la correccion se hace en el back con una clase de usuario con usename y email. 
        });
    } catch (error) {
        console.error(error);
        throw error;
    }
    
}


export const remove = async (id) => {
    try {
        await usersApi.delete(`${BASE_URL}/${id}`);
    } catch (error) {
        console.error(error);
        throw error;
    }
}