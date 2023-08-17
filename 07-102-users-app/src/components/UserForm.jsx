import { useState } from "react";

const initialUseForm = {
    username: '',
    password: '',
    email: '',
}

export const UserForm = () => {

    const [userForm, setUserForm] = useState(initialUseForm);

    const {username, password, email} = userForm;                                                   //los datos que contiene el userform,  lo desestructuramos y se lo pasamos a cada uno de los campos

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
    if(!username || !password || !email){
        alert("debe completar los campos del formulario");
    }
    console.log('enviando el formulario..');

    //guardar el user form en el listado de usuarios
    setUserForm(initialUseForm);                                                                    //limpia el formulario

}

return(
    <form onSubmit={onSubmit}>
        <input className="form-control my-3 w-75" placeholder="username" name="username" value={username} onChange={ onInputChange }/>

        <input className="form-control my-3 w-75" placeholder="password" name="password" type="password" value={password} onChange={ onInputChange }/>

        <input className="form-control my-3 w-75" placeholder="email" name="email" onChange={ onInputChange } value={email}/>

        <button className="btn btn-primary" type="submit" onChange={ onInputChange }>crear</button>


    </form>
);

}