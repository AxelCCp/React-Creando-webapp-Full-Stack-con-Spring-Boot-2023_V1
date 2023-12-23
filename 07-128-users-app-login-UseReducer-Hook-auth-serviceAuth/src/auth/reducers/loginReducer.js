
export const loginReducer = (state = {}, action) => {                                                            //recibe 2 parametros, un state y un action. El state es de tipo obj, por eso lleva las {}. Este obj va a contener una bandera, is Auth, y el valor del usuario.


    switch(action.type){

        case 'login':
            return {                                                                                        //retorna un obj isAuth en true.
                isAuth: true,
                user: action.payload                                                                        //devuelve tmbn al usuario a través del payload. obiamente no va a devolver la password, por seguridad..
            };


        case 'logout':
            return {
                  isAuth: false,
            } 

        default:
            return state;
        

    }


}