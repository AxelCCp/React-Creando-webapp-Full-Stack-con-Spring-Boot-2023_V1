import { AddProductCart, DeleteProductCart, UpdateQuantityProductCart } from "./itemsActions";

export const itemsReducer = (state=[], action) => {                                                                          //recibe un estado y una acción, en este caso es un arreglo[] ya q es un arreglo de items. action: contiene el atributo type.
    
    switch (action.type) {


        case AddProductCart:
            return [
                ...state,                                                                                                    //se conservan los datos q ya se tienen en el carro de compras. O sea el state.
                {
                    product : action.payload,                                                                                // esto es igual a product : product. //El action tiene un valor que se le conoce como payload.
                    quantity: 1,
                }
            ];
    

        case UpdateQuantityProductCart:        
            return state.map((i) => {
                if(i.product.id === action.payload.id){                                                                     // action.payload.id , en este caso el payload es el obj producto y de este se usa el id.
                    return {
                        //se devuelve una nueva instancia de item "i". en react los datos deben ser inmutables. por lo tanto no se cambia el item actual, sino q se devuelve una nueva instancia con la actulización.
                        //devuelve el producto como ya estaba, pero actualiza su cantidad.
                        ...i,
                        quantity : i.quantity + 1,
                    };
                }
                return i;
            });


        case DeleteProductCart:         
            return [                                                                                                       //devuelve un nuevo estado sin el producto que se elimina según el id.
                ...state.filter((i) => i.product.id !== action.payload)                                                    // en este caso el action.payload es el id, ya que se pasa el id en la llamada a itemReducer.
            ];
        
        default:
            return state;
    }
}