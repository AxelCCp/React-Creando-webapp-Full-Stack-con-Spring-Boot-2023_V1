import { RegisterPage } from "../auth/pages/RegisterPage"
import { Navbar } from "../components/layout/Navbar"
import { useUsers } from "../hook/useUsers"
import { UsersPage } from "../pages/UsersPage"
import { Routes, Route , Navigate} from 'react-router-dom'

export const UserRoutes = ( {login, handlerLogout} ) => {

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



    return (
        <>

            <Navbar login={ login } handlerLogout={handlerLogout} /> 

            <Routes>

                <Route path="users" element={<UsersPage
                
                    users={users}
                    userSelected={userSelected}
                    initialUseForm={initialUseForm}
                    visibleForm={visibleForm}
                    handlerAddUser={handlerAddUser}
                    handlerRemoveUser={handlerRemoveUser}
                    handlerUserSelectedForm={handlerUserSelectedForm}
                    handlerOpenForm={handlerOpenForm}
                    handlerCloseForm={handlerCloseForm}
                
                /> }/>

                <Route path="users/register" element={<RegisterPage handlerAddUser={handlerAddUser} initialUseForm={initialUseForm}/> }/>

                <Route path="users/edit/:id" element={ <RegisterPage users={users} handlerAddUser={handlerAddUser} initialUseForm={initialUseForm}/> }/>

                <Route path="/" element={ <Navigate to = "/users" /> }/>   

            </Routes>

        </>
    )

}