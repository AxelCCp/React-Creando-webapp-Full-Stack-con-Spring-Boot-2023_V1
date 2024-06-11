
/*
//CON REDUX ESTO NO SE USA

export const usersReducer = (state = [], action) => {

    switch (action.type) {
        case 'addUser':
            
            return [
                ...state,
                {
                    ...action.payload,
                }
            ];
        case 'removeUser':
            return state.filter(user => user.id !== action.payload);
        case 'updateUser':
            return state.map(u => {
                if (u.id === action.payload.id) {
                    return {
                        ...action.payload,
                        password: u.password
                    };
                }
                return u;
            })
        case 'loadingUsers':                                              //esto es para cargar los usuarios, modificar el estado de los usuarios en el api.
            return action.payload;                                        //en el payload se devuelve el arreglo de usuarios que se obtiene desde el backend. Se devuelve un obj de usuarios q está dentro del payload.
        default:
            return state;
    }
}
*/