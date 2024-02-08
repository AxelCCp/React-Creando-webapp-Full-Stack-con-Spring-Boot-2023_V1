import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { loginReducer } from "../reducers/loginReducer";
import { loginUser } from "../services/authService";

const initialLogin = JSON.parse(sessionStorage.getItem('login')) || {
    isAuth: false,
    isAdmin: false,
    user: undefined,
}

export const useAuth = () => {

    const [login, dispatch] = useReducer(loginReducer, initialLogin);
    
    const navigate = useNavigate();

    const handlerLogin = async ({ username, password }) => {                                        //al poner el await, se debe poner el async.
        
        try {

            //233
            const response = await loginUser({ username, password });

            const token = response.data.token;

            const claims = JSON.parse(window.atob(token.split(".")[1]));                           //en el indice 1 está el payload. atob() decodifica el token q está en base 64. atob() devuelve un json pero en string y se pasa a obj con JSON.
            
            console.log('claims: ', claims);

            //const user = { username : response.data.username }            //forma 1
            const user = { username : claims.username }                     //forma 2

            dispatch({
                type: 'login',
                payload: {user, isAdmin: claims.isAdmin},                                           //en el payload se pasa el user y ahora tmbn el isAdmin. 
            });
            
            sessionStorage.setItem('login', JSON.stringify({
                isAuth: true,
                isAdmin: claims.isAdmin,
                user,
            }));


            sessionStorage.setItem('token', `Bearer ${token}`);                                     //se guarda en la session ya q despues se va a mandar en cada uno de los métodos de userService, para llamar al restcontroller en el back.

            navigate('/users');
        
        } catch (error) {
            if(error.response?.status == 401){
                Swal.fire('Error Login', 'Username o password invalidos', 'error');
            } else if (error.response?.status == 403) {
                Swal.fire('Error Login', 'No tiene acceso al recurso!', 'error');
            } else {
                throw error;
            }
           
        }
    }

    const handlerLogout = () => {
        dispatch({
            type: 'logout',
        });
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('login');
        sessionStorage.clear();
    }

    return {
        login,
        handlerLogin,
        handlerLogout,
    }
}