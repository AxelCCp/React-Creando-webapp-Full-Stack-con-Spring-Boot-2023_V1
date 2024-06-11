import { useContext, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
//import { usersReducer } from "../reducers/usersReducer";
import { findAll, remove, save, update } from "../services/userService";
//import { AuthContext } from "../auth/context/AuthContext";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser, updateUser, loadingUsers, onUserSelectedForm, onOpenForm, onCloseForm, initialUserForm, loadingError} from "../store/slices/users/usersSlice";
import { useAuth } from "../auth/hooks/useAuth";


//useUsers : este hook ahora, en esta version, 17-247- ..., maneja redux.

export const useUsers = () => {

    //const [users, dispatch] = useReducer(usersReducer, initialUsers);                     //esto de la version sin redux.
    const { users, userSelected, visibleForm, errors } = useSelector(state => state.users);                                    //250 del estado, vamos a seleccionar a los usuarios
    const dispatch = useDispatch();                                                         //250 se obtiene el dispatch.

    //const [userSelected, setUserSelected] = useState(initialUserForm);
    //const [visibleForm, setVisibleForm] = useState(false);
    
    //const [errors, setErrors] = useState(initialErrors);

    const { login, handlerLogout } = useAuth()
    
    const navigate = useNavigate();

    const getUsers = async () => {                                                              //se obtiene la lista de los usuarios. //findAll() devuelve una promesa.
        try {
            const result = await findAll();                                                     //se usa el await para evitar la promesa.
            console.log(result);
            dispatch(loadingUsers(result.data))                                                 //result.data : este es el payload.  
        } catch (error) {
            if (error.response?.status == 401) {
                handlerLogout();
            }
        }
    }

    const handlerAddUser = async (user) => {
        // console.log(user);
        
        if(!login.isAdmin) return;

        let response;

        try {

            if (user.id === 0) {
                response = await save(user);                                                    //se usa el await pq devuelve una promesa. (esta linea de asincrona, donde se conecta al back)
                dispatch(addUser(response.data))                                                //250 - se agrega el usuario nuevo , e pasa un nuevo obj user (response.data). (esta línea es sincrona,  donde devuelve al front los datos que llegaron del back)
            } else {
                response = await update(user);                                                  //(esta linea de asincrona, donde se conecta al back)
                dispatch(updateUser(response.data))                                             //250 - se devuelve el user (response.data). (esta línea es sincrona,  donde devuelve al front los datos que llegaron del back)
            }


            Swal.fire(
                (user.id === 0) ?
                    'Usuario Creado' :
                    'Usuario Actualizado',
                (user.id === 0) ?
                    'El usuario ha sido creado con exito!' :
                    'El usuario ha sido actualizado con exito!',
                'success'
            );
            handlerCloseForm();
            navigate('/users');

        } catch (error) {
            //console.error(error);
            if(error.response && error.response.status == 400){
                
                console.log(error.response.data);
                dispatch(loadingError(error.response.data));
            
            } else if (error.response && error.response.status == 500 && error.response.data?.message?.includes('constraint')) {                     //class 189 : esto es para las validaciones de campos unicos en la bbdd. o sea q no se puede repetir eñ username y el email.
            
                if(error.response.data?.message?.includes('UK_username')) {                                                                        //class 189 : UK_username : este es el index de username en la tabla users de workbench. este index UK_username se modificó con alter table -> indexes
                    dispatch(loadingError({ username: 'El username ya existe!' }));
                }

                if(error.response.data?.message?.includes('UK_email')) {                                                                        
                    dispatch(loadingError({ email: 'El email ya existe!' }));
                }

            } else if (error.response?.status == 401) {
            
                handlerLogout();

            } else {
                console.error(error);
                throw error;   //con cualquier otro error, se relanza.
            }
        }
    }

    const handlerRemoveUser = (id) => {
        // console.log(id);

        if(!login.isAdmin) return;

        Swal.fire({
            title: 'Esta seguro que desea eliminar?',
            text: "Cuidado el usuario sera eliminado!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!'
        }).then(async(result) => {
            
            if (result.isConfirmed) {

                try {

                await remove(id);                           //238 min 8.
                
                dispatch(removeUser(id));                   //250

                Swal.fire(
                    'Usuario Eliminado!',
                    'El usuario ha sido eliminado con exito!',
                    'success'
                );

                } catch (error) {
                    if (error.response?.status == 401) {
                        handlerLogout();
                    }
                }
            }
        })

    }

    const handlerUserSelectedForm = (user) => {
        // console.log(user)
        //setVisibleForm(true);
        //setUserSelected({ ...user });
        dispatch(onUserSelectedForm({ ...user }))                   //251
    }

    const handlerOpenForm = () => {
        //setVisibleForm(true);
        dispatch(onOpenForm());                                     //251
    }

    const handlerCloseForm = () => {
        //setVisibleForm(false);
        //setUserSelected(initialUserForm);
        dispatch(onCloseForm());
        dispatch(loadingError({}));                                 //se limpian los errores que puedan haber en el formulario.
    }
    return {
        users,
        userSelected,
        initialUserForm,
        visibleForm,
        errors,
        handlerAddUser,
        handlerRemoveUser,
        handlerUserSelectedForm,
        handlerOpenForm,
        handlerCloseForm,
        getUsers,                                                   //se llama a la funcion q devuelve los usuarios del backend.
    }
}