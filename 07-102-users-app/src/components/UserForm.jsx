import { useEffect, useState } from "react";


export const UserForm = ({userSelected, handlerAddUser, initialUseForm}) => {

    const [userForm, setUserForm] = useState(initialUseForm);

    const {id, username, password, email} = userForm;                                                   //los datos que contiene el userform,  lo desestructuramos y se lo pasamos a cada uno de los campos

    useEffect(() => {
        setUserForm({
            ...userSelected,
            //password : '',

        }); 
    }, [userSelected]);


    const onInputChange = ({target}) => {
        //console.log(target.value);
        const {name, value} = target;
        setUserForm({                                                                                   //se guardan los datos que vienen del formulario.
            ...userForm,                                                                                //se pasan los datos que ya tiene el formulario.
            [name] : value,                                                                             //luego se actualizan los datos que tiene el campo en particular.
        })
    }


    const onSubmit = (event) => {
        event.preventDefault();                                                                         //esto es para q cuando se envie el formulario,  no se actualice la pagina.
        if(!username || !password || !email){                                                           //valida que los datos no vengan vacios.
            alert("debe completar los campos del formulario");
            return;
        }
    console.log('enviando el formulario..');


    //guardar el user form en el listado de usuarios
    handlerAddUser(userForm);
    setUserForm(initialUseForm);                                                                    //limpia el formulario

    }   

return(
    <form onSubmit={onSubmit}>
        <input className="form-control my-3 w-75" placeholder="username" name="username" value={username} onChange={ onInputChange }/>

        <input className="form-control my-3 w-75" placeholder="password" name="password" type="password" value={password} onChange={ onInputChange }/>

        <input className="form-control my-3 w-75" placeholder="email" name="email" onChange={ onInputChange } value={email}/>

        <input className="form-control my-3 w-75"  name="id" value={id} type="hidden"/>

        <button className="btn btn-primary" type="submit" onChange={ onInputChange }>{id > 0 ? 'Editar' : 'Crear'}</button>


    </form>
);

}