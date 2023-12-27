import { useUsers } from "../hook/useUsers";
import { UserContext } from "./UserContext"

export const UserProvider = ({children}) => {                                             //se pasan los elementos hijos que van a estar anidados en este componente. //children: es todo lo que está dentro de as etiquetas <UserProvider> en UserRoutes.


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
    } = useUsers();                                                                      //con esto decimos q estos elementos vienen de useUsers


    return(
        <UserContext.Provider value={                                                    //toda la información que esta entre {} se va a almacenar en el storage del Provider. Con esto los Childen van a poder acceder a la informacion.

            {

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
            
        }>

            {children}


        </UserContext.Provider>
    )
}