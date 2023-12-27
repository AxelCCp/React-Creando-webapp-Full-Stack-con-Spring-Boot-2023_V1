import { useReducer, useState } from "react";
import { usersReducer } from "../reducers/usersReducer";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const initialUsers = [
    {
        id: 1,
        username: 'pepe',
        password: '12345',
        email: 'pepe@correo.com'
    },
];

const initialUseForm = {                                                                            //deberia llamarse initialUserForm
    id : 0, 
    username: '',
    password: '',
    email: '',
}


export const useUsers = () => {
    
    const[users, dispatch] = useReducer(usersReducer, initialUsers);                                                             //users : es la nueva constante donde va a estar la lista de usuarios. esta lista se va a modificar con el dispatch. //dispatch : permite modificar el estado hacia la funcion. //usereducer : recibe la funcion usersReducer y los valores iniciales.

    const[userSelected, setUserSelected] = useState(initialUseForm);                                                                //esto es para editar a un usuario. se usa el useState() pq es solo para seleccionar un obj usuario. se podría usa el useReducer, pero este es mejor cuando son varias las operaciones q se pueden realizar con un obj. Al useState se le pasa un usuario por defecto initialUseForm

    const[visibleForm, setVisibleForm] = useState(false);

    const navigate = useNavigate();                                                                                              //opcional, para redirigir a /users
    

    const handlerAddUser = (user) => {        
        
        let type;

        if(user.id === 0){
            type = 'addUser';
        }else{
            type = 'updateUser';
        }

        dispatch({                                                                                                               //aqui se envian y aplican los cambios por medio del dispatch.
            type: type,                                                                                                          //nombre de la funcion.
            payload: user,                                                                                                       //action.payload,  el obj usuario.
        });

        Swal.fire(
            (user.id === 0) ? 'Usuario creado' : 'Usuario actualizado',
            (user.id === 0) ? 'El usuario ha sido creado con éxito' : 'El usuario ha sido actualizado con éxito',
            'success'
          );
          handlerCloseForm();
          navigate('/users');
    }
    
    
    const handlerRemoveUser = (id) => {

        Swal.fire({
            title: 'Está seguro?',
            text: "Cuidado el usuario será eliminado!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar!'
          }).then((result) => {
            if (result.isConfirmed) {

                dispatch({
                    type: 'removeUser',
                    payload: id,
                });

              Swal.fire(
                'Usuario eliminado!',
                'El usuario ha sido eliminado con éxito.',
                'success'
              )
            }
          })
    }


    const handlerUserSelectedForm = (user) => {
        setVisibleForm(true);
        setUserSelected({...user});                                                                 // {..user} : se pasa un clon de user.
    }


    const handlerOpenForm = () => {
        setVisibleForm(true);
    }

    const handlerCloseForm = () => {
        setVisibleForm(false);
        setUserSelected(initialUseForm);        
    }



    return {
        users, 
        userSelected,
        initialUseForm,
        visibleForm,
        handlerAddUser,
        handlerRemoveUser,
        handlerUserSelectedForm,
        handlerOpenForm,
        handlerCloseForm,  
    }
}