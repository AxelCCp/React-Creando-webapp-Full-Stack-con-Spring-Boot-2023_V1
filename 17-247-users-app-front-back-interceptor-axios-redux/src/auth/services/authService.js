import axios from "axios";

//233
export const loginUser = async ({username, password}) => {                                      //se pone el async, ya que el await implica q la funcion sea asincrona.
    
    try {
        return await axios.post('http://localhost:8080/login', {username, password});           //se pone el away pq el axios devuelve una promesa y lo que se quiere es el contenido.
    } catch (error) {
        throw error;
    }
    
}