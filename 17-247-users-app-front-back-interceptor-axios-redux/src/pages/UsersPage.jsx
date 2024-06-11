import { useEffect } from "react";
import { UserModalForm } from "../components/UserModalForm";
import { UsersList } from "../components/UsersList";
import { useAuth } from "../auth/hooks/useAuth";
import { useUsers } from "../hooks/useUsers";

export const UsersPage = () => {

    const {
        users,
        visibleForm,
        handlerOpenForm,
        getUsers,                                                   
    } = useUsers();                                                //252 - ahora todo esto se obtiene de useUsers que en esta version (17-247) maneja redux. 


    const { login } = useAuth()


    useEffect(() => {
        getUsers();                                                 //se ejecuta getUsers con un evento. cuando se crea el componente UserPage.jsx.                                            
    }, []);
    
    return (
        <>

            {!visibleForm ||
                <UserModalForm />}
            <div className="container my-4">
                <h2>Users App</h2>
                <div className="row">
                    <div className="col">
                        {(visibleForm || !login.isAdmin) || <button
                            className="btn btn-primary my-2"
                            onClick={handlerOpenForm}>
                            Nuevo Usuario
                        </button>}

                        {
                            users.length === 0
                                ? <div className="alert alert-warning">No hay usuarios en el sistema!</div>
                                : <UsersList />
                        }
                    </div>
                </div>
            </div>
        </>
    );
}