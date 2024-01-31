import { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { usersReducer } from "../reducers/usersReducer";
import { findAll, remove, save, update } from "../services/userService";

const initialUsers = [];                                                                    //ahora el initialUsers parte con un arreglo vacío.

const initialUserForm = {
    id: 0,
    username: '',
    password: '',
    email: '',
}

const initialErrors = {
    username: '',
    password: '',
    email: '',
}

export const useUsers = () => {
    const [users, dispatch] = useReducer(usersReducer, initialUsers);
    const [userSelected, setUserSelected] = useState(initialUserForm);
    const [visibleForm, setVisibleForm] = useState(false);
    const [errors, setErrors] = useState(initialErrors);
    
    const navigate = useNavigate();

    const getUsers = async () => {                                                          //se obtiene la lista de los usuarios. //findAll() devuelve una promesa.
        const result = await findAll();                                                     //se usa el await para evitar la promesa.
        console.log(result);
        dispatch({                                                                          //con el dispatch se guarda la respuesta del findAll() en el estado de react.
            type: 'loadingUsers',
            payload: result.data,
        });
    }

    const handlerAddUser = async (user) => {
        // console.log(user);

        let response;

        try {

            if (user.id === 0) {
                response = await save(user);                                                    //se usa el await pq devuelve una promesa.
            } else {
                response = await update(user);
            }

            dispatch({
                type: (user.id === 0) ? 'addUser' : 'updateUser',
                payload: response.data,                                                         //se actualiza el usuario en el estado de react, se pasa el usuario que viene desde el back.
            });

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
                setErrors(error.response.data);
            
            } else if (error.response && error.response.status == 500 && error.response.data?.message?.includes('constraint')) {                     //class 189 : esto es para las validaciones de campos unicos en la bbdd. o sea q no se puede repetir eñ username y el email.
            
                if(error.response.data?.message?.includes('UK_username')) {                                                                        //class 189 : UK_username : este es el index de username en la tabla users de workbench. este index UK_username se modificó con alter table -> indexes
                    setErrors({ username: 'El username ya existe!' })
                }

                if(error.response.data?.message?.includes('UK_email')) {                                                                        
                    setErrors({ email: 'El email ya existe!' })
                }
            } else {
                console.error(error);
                throw error;   //con cualquier otro error, se relanza.
            }
        }
    }

    const handlerRemoveUser = (id) => {
        // console.log(id);

        Swal.fire({
            title: 'Esta seguro que desea eliminar?',
            text: "Cuidado el usuario sera eliminado!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!'
        }).then((result) => {
            if (result.isConfirmed) {

                remove(id);

                dispatch({
                    type: 'removeUser',
                    payload: id,
                });
                Swal.fire(
                    'Usuario Eliminado!',
                    'El usuario ha sido eliminado con exito!',
                    'success'
                )
            }
        })

    }

    const handlerUserSelectedForm = (user) => {
        // console.log(user)
        setVisibleForm(true);
        setUserSelected({ ...user });
    }

    const handlerOpenForm = () => {
        setVisibleForm(true);
    }

    const handlerCloseForm = () => {
        setVisibleForm(false);
        setUserSelected(initialUserForm);
        setErrors({});                                               //se limpian los errores que puedan haber en el formulario.
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