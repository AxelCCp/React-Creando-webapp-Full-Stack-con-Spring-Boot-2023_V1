import { LoginPage } from "./auth/pages/LoginPage";
import { UsersPage } from "./pages/UsersPage";
import { Navbar } from "./components/layout/Navbar";
import { useAuth } from "./auth/hooks/useAuth";



export const UsersApp = () => {

    const { login, handlerLogin, handlerLogout } = useAuth();
                                  
    return(
        
        <>
            {login.isAuth 
            
                ? 
                
                (                                                                                                   //se ponen () : para crear un fragmento, ya q sino da error.
                <>
                    <Navbar login={ login } handlerLogout={handlerLogout} />                                        { /*se le pasa el login como una props*/}
                    <UsersPage/> 
                </>
                )
                
                : 
                
                <LoginPage handlerLogin={handlerLogin} />}
            
        </>
    );
}