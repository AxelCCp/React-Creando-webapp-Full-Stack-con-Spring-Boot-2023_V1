import { UserForm } from "./components/UserForm";
import { UsersList } from "./components/UsersList";
import { useUsers } from "./hook/useUsers";



export const UsersApp = () => {

    const {
        users, 
        userSelected,
        initialUseForm,
        visibleForm,
        handlerAddUser,
        handlerRemoveUser,
        handlerUserSelectedForm,  
        handlerOpenForm,
        handlerCloseForm,  
    } = useUsers();                                                                                                                                               //con esto decimos q estos elementos vienen de useUsers

    return(
        <>
            <div className="container my-4">

                <h2>User app</h2>

                <div className="row">
                    
                    {!visibleForm || 
                        <div className="col">
                            <UserForm initialUseForm={initialUseForm} handlerAddUser={handlerAddUser} userSelected={userSelected} handlerCloseForm={handlerCloseForm}/>
                        </div>
                    }
                    

                    <div className="col">
                        {visibleForm || <button className="btn btn-primary my-2" onClick={handlerOpenForm}>Nuevo usuario</button>}
                        

                        {users.length === 0 ? 
                        <div className="alert alert-warning">No hay usuarios en el sistema!</div> : 
                        <UsersList users={users} handlerRemoveUser={handlerRemoveUser} handlerUserSelectedForm={handlerUserSelectedForm}/> }      

                    </div>
                </div>

            </div>
        </>
    );
}