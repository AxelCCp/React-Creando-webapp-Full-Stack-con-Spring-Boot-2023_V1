import { UserForm } from "./components/UserForm";
import { UsersList } from "./components/UsersList";
import { useUsers } from "./hook/useUsers";



export const UsersApp = () => {

    const {
        users, 
        userSelected,
        initialUseForm,
        handlerAddUser,
        handlerRemoveUser,
        handlerUserSelectedForm,  
    } = useUsers();                                                                                                                                               //con esto decimos q estos elementos vienen de useUsers

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