import { useAuth } from "../hooks/useAuth";
import { AuthContext } from "./AuthContext"

export const AuthProvider = ( {children} ) => {         //children : los elementtos hijos que van a estar anidados en el AuthProvider.

    const { login, handlerLogin, handlerLogout } = useAuth();

    return(

        <AuthContext.Provider value={

            {

                login, handlerLogin, handlerLogout

            }

        }>


            {children}                                                           {/* se pone esto para q cualquier hijo pueda acceder a esta información. */}


        </AuthContext.Provider>

    )

} 