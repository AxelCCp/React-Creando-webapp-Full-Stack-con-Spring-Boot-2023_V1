import { UserModalForm } from "../components/UserModalForm";
import { UsersList } from "../components/UsersList";



export const UsersPage = ({
    users, 
    userSelected,
    initialUseForm,
    visibleForm,
    handlerAddUser,
    handlerRemoveUser,
    handlerUserSelectedForm,  
    handlerOpenForm,
    handlerCloseForm,  
}) => {

    
    return(
        <>

            {!visibleForm || 
            
               <UserModalForm userSelected={userSelected} initialUseForm={initialUseForm} handlerAddUser={handlerAddUser} handlerCloseForm={handlerCloseForm}/>
            }

            <div className="container my-4">

                <h2>User app</h2>

                <div className="row"> 

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