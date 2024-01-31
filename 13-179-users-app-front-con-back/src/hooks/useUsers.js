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

export const useUsers = () => {
    const [users, dispatch] = useReducer(usersReducer, initialUsers);
    const [userSelected, setUserSelected] = useState(initialUserForm);
    const [visibleForm, setVisibleForm] = useState(false);
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
    }
    return {
        users,
        userSelected,
        initialUserForm,
        visibleForm,
        handlerAddUser,
        handlerRemoveUser,
        handlerUserSelectedForm,
        handlerOpenForm,
        handlerCloseForm,
        getUsers,                                                   //se llama a la funcion q devuelve los usuarios del backend.
    }
}