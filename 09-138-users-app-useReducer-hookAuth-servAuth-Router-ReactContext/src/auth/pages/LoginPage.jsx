import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";


const initialLoginForm = {
  username : '',
  password : '',
}


export const LoginPage = () => {


    const { handlerLogin } = useContext(AuthContext);

    const [loginForm, setLoginForm] = useState(initialLoginForm);                                                   //con el useState se le da un estado inicial al formulario de login. El value se maneja con el estado. initialLoginForm : el estado inicial del formulario.
    
    const { username, password} = loginForm;                                                                        //desestructurando los datos del loginForm. Luego estos valores se mapean a cada imput del formulario cuando inicialmente los datos vienen de initialLoginForm.
    

    const onInputChange = ({target}) => {                                                                           //es una funcion de flecha q incluye como parametro el "target". esto quiere decir que como parametro se pasa el obj 'event'. y al poner la palabra 'target', se está desestructurando la propiedad target que es la q nos sirve.
        
      const { name,  value } = target;                                                                              //se desestructura el target en name y value.
      
      setLoginForm({                                                                                                //va a ser un obj. ..... va a esparcir todo lo q tenga el login form y ademas el valor del campo q se está escribiendo.
          ...loginForm,
          [name] : value
      });
    
    }



    const onSubmit = (event)  => {

      event.preventDefault();                                                                                       //para que no haga refresh la pagina.

      if(!username || !password){

        Swal.fire('Error de validación', 'Username y password requeridos', 'error');
      
      }

      //aca implementamos el login

      handlerLogin({username, password});

      setLoginForm(initialLoginForm);                                                                                 //reinicia el formulario.
      
    }
    
    return (

        <div className="modal" tabIndex="-1" style={ {display:'block'} }>
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Login page</h5>
      </div>

      <form onSubmit={onSubmit}> 

        <div className="modal-body">
            <input className="form-control my-3 w-75" placeholder="Username" name="username" value={username} onChange={ onInputChange }/>
            <input className="form-control my-3 w-75" placeholder="Password" name="password" type="password" value={password} onChange={ onInputChange }/>
        </div>

        <div className="modal-footer">
            <button type="submit" className="btn btn-primary">Login</button>
        </div>

      </form>

    </div>
  </div>
</div>

    );

}