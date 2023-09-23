export const usersReducer = (state = [], action) => {                                                   //se le pasa el estado y la accion.  el state es del tipo arreglo [].

    switch (action.type) {                                                                              //evaluea la accion
        
        case 'addUser':
            return[
                ...state,                                                                               //se pone el state q ya tenemos. los usuarios q ya tenemos
                {
                    ...action.payload,                                                                  //este obj es lo que venga como parametro en el payload
                    id: new Date().getTime(),                                                           //el profe usa milisegundos para ponerle un id.
                }
            ];
    
        case 'removeUser':
            return state.filter(user => user.id !== action.payload);  
            
            
        case 'updateUser':
            return state.map(u => {                                                                     //se implementa con el state y el map para modificar el usuario.    
                if(u.id === action.payload.id){                                                         //si el id del usuario es identico al id usuario q viene en el payload. si es === es pq lo encontró.
                    return {
                        ... action.payload                                                              //devuelve el obj usuario modificado. lo reemplaza por el obj original.
                    }                                                               
                }
                return u;                                                                               //retorna el usuario en caso de que no lo encontrara por el id.
            })    
            
        default:
            return state;                                                                               //se devuelve el estado sin cambios
    }

}