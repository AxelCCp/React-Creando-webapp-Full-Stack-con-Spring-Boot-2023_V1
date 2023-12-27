import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { UserContext } from "../context/UserContext";


export const UserForm = ({userSelected, handlerCloseForm}) => {

    const { initialUseForm, handlerAddUser } = useContext(UserContext);                                 //se obtiene la informacion desde el UserContext.

    const [userForm, setUserForm] = useState(initialUseForm);

    const {id, username, password, email} = userForm;                                                   //los datos que contiene el userform,  lo desestructuramos y se lo pasamos a cada uno de los campos

    useEffect(() => {
        setUserForm({
            ...userSelected,
            password : '',                                                                              //como seguridad para limpiar el password

        }); 
    }, [userSelected]);

    const onInputChange = ({target}) => {
        //console.log(target.value);
        const {name, value} = target;
        setUserForm({
            ...userForm, 
            [name] : value,
        })
    }

const onSubmit = (event) => {
    event.preventDefault();                                                                         //esto es para q cuando se envie el formulario,  no se actualice la pagina.
    if(!username || (!password && id === 0) || !email){                                             //(!password && id === 0) : que valide cuando no venga el password y el id sea === a 0. esto es para q no pida validacion de password en el formulario, cuando se está editando un usuario.
        
        Swal.fire(
            'Error de validación',
            'Debe completar los campos del formulario',
            'error'
          )

        return;
    }

    if(!email.includes('@')){
        Swal.fire(
            'Error de validación de email',
            'El email debe ser válido! incluye un @...',
            'error'
          )

        return;
    }

    console.log('enviando el formulario..');

    //guardar el user form en el listado de usuarios
    handlerAddUser(userForm)
    setUserForm(initialUseForm);                                                                    //limpia el formulario
}


const onCloseForm = () => {
    handlerCloseForm();
    setUserForm(initialUseForm);
}


return(
    <form onSubmit={onSubmit}>
        <input className="form-control my-3 w-75" placeholder="username" name="username" value={username} onChange={ onInputChange }/>

        { id > 0 ? '' : <input className="form-control my-3 w-75" placeholder="password" name="password" type="password" value={password} onChange={ onInputChange }/> }

        <input className="form-control my-3 w-75" placeholder="email" name="email" onChange={ onInputChange } value={email}/>

        <input className="form-control my-3 w-75"  name="id" value={id} type="hidden"/>

        <button className="btn btn-primary" type="submit" onChange={ onInputChange }>{id > 0 ? 'Editar' : 'Crear'}</button>

        {/* si handlerCloseForm es indefinido, no hacemos nada, esto es para a no muestre el boton cerrar cuando se llega al formulario a traves de la navbar.  */}

        {!handlerCloseForm ||  <button className="btn btn-primary mx-2" type="button" onClick={ () => onCloseForm() }>Cerrar</button>}

       


    </form>
);

}