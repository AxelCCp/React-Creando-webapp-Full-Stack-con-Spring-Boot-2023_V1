import { useReducer } from "react";
import { loginReducer } from "../reducers/loginReducer";
import Swal from "sweetalert2";
import { loginUser } from "../services/authServices";

const initialLogin = JSON.parse(sessionStorage.getItem('login')) || {                                       //primero pregunta si existe el atributo 'login' en el sessionstorage. va a buscar si hay una session existente, sino pasa los valores por defecto.
    isAuth: false,
    user: undefined
}



export  const useAuth = () => {

    const [login, dispatch] = useReducer(loginReducer, initialLogin);                                        //con esto se maneja el estado.   // recibe funcion loginReducer.


    const handlerLogin = ({username, password}) => {                                                         //se desestructura un userLogin en {username, password}.

        const isLogin = loginUser({username, password});                                                     //loginUser() : va a devolver un boolean.

        if(isLogin){
          
            const user = {username: 'admin'}

            dispatch({                                                                                       //con el dispach, va al loginreducer y entra en el  case 'login' y ahí, pasa el usuario en el atributo user ( user: action.payload ).
                type: 'login',
                payload: user,
            })

            sessionStorage.setItem('login', JSON.stringify({
                
                isAuth: true,
                user: user

            }));

        } else {

          Swal.fire('Error de login', 'Username o password incorrectos', 'error');
        
        }

    }
    

    const handlerLogout = () => {
        dispatch({
            type: 'logout',

        });
        sessionStorage.removeItem('login');
    }

    return {

        login,
        handlerLogin,
        handlerLogout
        
    }


}