import { useReducer, useState } from "react";
import { UserForm } from "./components/UserForm";
import { UsersList } from "./components/UsersList";
import { usersReducer } from "./reducers/usersReducer";


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

export const UsersApp = () => {

    const[users, dispatch] = useReducer(usersReducer, initialUsers);                                //users : es la nueva constante donde va a estar la lista de usuarios. esta lista se va a modificar con el dispatch. //dispatch : permite modificar el estado hacia la funcion. //usereducer : recibe la funcion usersReducer y los valores iniciales.


    const[userSelected, setUserSelected] = useState(initialUseForm);                                //esto es para editar a un usuario. se usa el useState() pq es solo para seleccionar un obj usuario. se podría usa el useReducer, pero este es mejor cuando son varias las operaciones q se pueden realizar con un obj. Al useState se le pasa un usuario por defecto initialUseForm

    const handlerAddUser = (user) => {
        //console.log(user);
        
        let type;

        if(user.id === 0){
            type = 'addUser';
        }else{
            type = 'updateUser';
        }

        dispatch({                                                                                  //aqui se envian y aplican los cambios por medio del dispatch.
            type: type,                                                                        //nombre de la funcion.
            payload: user,                                                                          //action.payload,  el obj usuario.
        })
    }
    
    
    const handlerRemoveUser = (id) => {
        //console.log(id);
        dispatch({
            type: 'removeUser',
            payload: id,
        })
    }


    const handlerUserSelectedForm = (user) => {
        //console.log(user);
        setUserSelected({...user});                                                                 // {..user} : se pasa un clon de user.

    }


    return(
        <>
            <div className="container my-4">

                <h2>User app</h2>

                <div className="row">
                    <div className="col">
                        <UserForm
                            initialUseForm={initialUseForm}      
                            handlerAddUser={handlerAddUser}
                            userSelected={userSelected}
                            />
                    </div>

                    <div className="col">
                        {users.length === 0 ? 
                        <div className="alert alert-warning">No hay usuarios en el sistema!</div> : 
                        <UsersList users={users} handlerRemoveUser={handlerRemoveUser} handlerUserSelectedForm={handlerUserSelectedForm}/> }                                                    
                    </div>
                </div>

            </div>
        </>
    );
}