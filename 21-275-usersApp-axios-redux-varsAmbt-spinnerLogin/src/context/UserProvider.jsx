/*
//CON REDUX ESTO NO SE USA
import { useUsers } from "../hooks/useUsers";
import { UserContext } from "./UserContext"

export const UserProvider = ({children}) => {

    const {
        users,
        userSelected,
        initialUserForm,
        visibleForm,
        errors,
        handlerAddUser,
        handlerRemoveUser,
        handlerUserSelectedForm,
        handlerOpenForm,
        handlerCloseForm,
        getUsers,                                                       //se pasa getUsers().
    } = useUsers();

    return (
        <UserContext.Provider value={
            {
                users,
                userSelected,
                initialUserForm,
                visibleForm,
                errors,
                handlerAddUser,
                handlerRemoveUser,
                handlerUserSelectedForm,
                handlerOpenForm,
                handlerCloseForm,
                getUsers,                                             //se pasa getUsers().
            }
        }>
            {children}
        </UserContext.Provider>
    )
}
*/