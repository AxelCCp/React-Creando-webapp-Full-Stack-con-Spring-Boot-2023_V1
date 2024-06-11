import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { loginUser } from "../services/authService";
import { useDispatch, useSelector } from "react-redux";
import { onLogin, onLogOut } from "../../store/slices/auth/authSlice";


export const useAuth = () => {

    const dispatch = useDispatch();

    const { user, isAdmin, isAuth } = useSelector(state => state.auth);                           //254 se traen estos datos desde redux.

    //const [login, dispatch] = useReducer(loginReducer, initialLogin);
    
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

            dispatch(onLogin( {user, isAdmin: claims.isAdmin} ));
            
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
        dispatch(onLogOut());
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('login');
        sessionStorage.clear();
    }

    return {
        login: {user, isAdmin, isAuth},                 //254 se devuelve un obj login que contenga al usuario. anteriormente, sin Redux, se devolvia solo "login". Este obj se debe traer desde el estado de redux.
        handlerLogin,
        handlerLogout,
    }
}