import { useReducer } from "react";
import { LoginPage } from "./auth/pages/LoginPage";
import { UsersPage } from "./pages/UsersPage";
import { loginReducer } from "./auth/reducers/loginReducer";
import Swal from "sweetalert2";
import { Navbar } from "./components/layout/Navbar";


const initialLogin = JSON.parse(sessionStorage.getItem('login')) || {                                       //primero pregunta si existe el atributo 'login' en el sessionstorage. va a buscar si hay una session existente, sino pasa los valores por defecto.

    isAuth: false,
    user: undefined
}


export const UsersApp = () => {
                                  
    const [login, dispach] = useReducer(loginReducer, initialLogin);                                        //con esto se maneja el estado.   // recibe funcion loginReducer.
    
    const handlerLogin = ({username, password}) => {                                                         //se desestructura un userLogin en {username, password}.

        if(username === 'admin' && password === '12345'){
          
            const user = {username: 'admin'}

            dispach({                                                                                       //con el dispach, va al loginreducer y entra en el  case 'login' y ahí, pasa el usuario en el atributo user ( user: action.payload ).
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
        dispach({
            type: 'logout',

        });
        sessionStorage.removeItem('login');
    }


    return(
        
        // despues de la autenticacion, se pregunta si el usuario se autenticó o no.
        <>
            {login.isAuth 
            
                ? 
                
                (                                                                                                   //se ponen () : para crear un fragmento, ya q sino da error.
                <>
                    <Navbar login={ login } handlerLogout={handlerLogout} />                                        { /*se le pasa el login como una props*/}
                    <UsersPage/> 
                </>
                )
                
                : 
                
                <LoginPage handlerLogin={handlerLogin} />}
            
        </>
    );
}