import { useEffect, useState } from "react"
import { UserForm } from "../../components/UserForm"
import { useParams } from "react-router-dom";

export const RegisterPage = ( {users=[], handlerAddUser, initialUseForm} ) => {                             //el userSelected depende del id, por lo tanto se quita de los {}.  // se pasa el user, pero sino viene, se pasa un arreglo vacío. es es pq en las rutas, está el users/register,  y a este no se le pasa el user.

    const [userSelected, setUserSelected] = useState(initialUseForm);                                       //el userSelected se manejará con un useState. manejando un estado propio de esta pagina y se va a poblar con el id.  // el initialUseForm es necesario para el formulario como tambn para el userSelected.

    const {id} = useParams();                                                                               //se captura el id que viene por parametro de url. 

    useEffect(() => {                                                                                       //apenas se obtenga el id se ejecuta esto... //con el id se puebla en el userSelected. Para esto se usa un useEffect, ya q cuando se hace click,  se gatilla el useEffect al renderizar la pagina.
        
        console.log('id: ', id);
        
        if(id){
        
            const user = users.find(u => u.id == id) || initialUseForm;                                         //pasa el usuario y si no lo encuentra, pasa el initialUseForm.         
            
            setUserSelected(user);
            
        }
    
    }, [id])  

    return (

        <div className="container my-4">

            <h4>{ userSelected.id > 0 ? 'Editar' : 'Registrar' } usuario</h4>

            <div className="row">

                <div className="col">

                    <UserForm  userSelected={userSelected} handlerAddUser={handlerAddUser} initialUseForm={initialUseForm} />

                </div>

            </div>

        </div>

    )

}