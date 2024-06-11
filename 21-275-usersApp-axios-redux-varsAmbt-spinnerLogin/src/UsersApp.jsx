//248
//las rutas que estaban aquí en la version anterior, se pasan a AppRoutes.
//aquí ahora se va a configurar redux.

//<Provider> : se usa para envolver todo el esquema con el store de redux. Con esto, toda la app va a poder acceder al store.

import { Provider } from "react-redux"
import { AppRoutes } from "./AppRoutes"
import { store } from "./store/store"

export const UsersApp = () => {

    return(
        <Provider store={store}>
            <AppRoutes/>
        </Provider>
        
    )
}