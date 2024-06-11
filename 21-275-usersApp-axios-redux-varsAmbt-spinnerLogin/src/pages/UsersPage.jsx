import { useEffect } from "react";
import { UserModalForm } from "../components/UserModalForm";
import { UsersList } from "../components/UsersList";
import { useAuth } from "../auth/hooks/useAuth";
import { useUsers } from "../hooks/useUsers";

export const UsersPage = () => {

    const {
        users,
        visibleForm,
        isLoading,
        handlerOpenForm,
        getUsers,                                                   
    } = useUsers();                                                //252 - ahora todo esto se obtiene de useUsers que en esta version (17-247) maneja redux. 


    const { login } = useAuth()


    useEffect(() => {
        getUsers();                                                 //se ejecuta getUsers con un evento. cuando se crea el componente UserPage.jsx.                                            
    }, []);
    

    //260
    if(isLoading) {
        return (
            <div className="container my-4 text-center">
                {/*<h4>Cargando ...</h4>*/}
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-border text-secondary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-border text-success" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-border text-danger" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-border text-warning" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-border text-info" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-border text-light" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }


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