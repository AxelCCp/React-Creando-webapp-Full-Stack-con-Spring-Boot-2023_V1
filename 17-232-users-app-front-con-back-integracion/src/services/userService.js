import axios from "axios"

const BASE_URL = 'http://localhost:8080/users';

//235 - 236
const config = () => {

    return {
        headers: {
            "Authorization": sessionStorage.getItem('token'),
            "Content-Type": "application/json"
        }        
    }
}

export const findAll = async() => {
    try {
        const response = await axios.get(BASE_URL);                    
        return response;
    } catch (error) {
        console.error(error);
    }
    return null;
}


export const save = async ({username, email, password, admin}) => {                         //se pasa el user desestructurado. la funcion debe ser asincrona ya q se comunica en el api del back.

    try {
        return await axios.post(BASE_URL, {                                               //el post recibe la ruta y el obj.
            username : username,
            email : email,
            password : password,
            admin : admin,
        }, config());
    } catch (error) {
        console.error(error);
        throw error;
    }
    
} 


export const update = async ({id, username, email, admin}) => {

    try {
        return await axios.put(`${BASE_URL}/${id}`, {
            username,
            email,
            admin,
            //password: 'nothing',         //se pone un password provisorio, para q la validacion del password no webee al editar un usuario (esta es un solucion desde front). la correccion se hace en el back con una clase de usuario con usename y email. 
        }, config());
    } catch (error) {
        console.error(error);
        throw error;
    }
    
}


export const remove = async (id) => {
    try {
        await axios.delete(`${BASE_URL}/${id}`, config());
    } catch (error) {
        console.error(error);
        throw error;
    }
}