import { RegisterPage } from "../auth/pages/RegisterPage"
import { Navbar } from "../components/layout/Navbar"
import { UserProvider } from "../context/UserProvider"
import { useUsers } from "../hook/useUsers"
import { UsersPage } from "../pages/UsersPage"
import { Routes, Route , Navigate} from 'react-router-dom'

export const UserRoutes = () => {


    return (
        <>

            <UserProvider>

                <Navbar/> 

                <Routes>

                    <Route path="users" element={<UsersPage /> }/>

                    <Route path="users/register" element={<RegisterPage /> }/>

                    <Route path="users/edit/:id" element={ <RegisterPage /> }/>

                    <Route path="/" element={ <Navigate to = "/users" /> }/>   

                </Routes>


            </UserProvider>

        </>
    )

}