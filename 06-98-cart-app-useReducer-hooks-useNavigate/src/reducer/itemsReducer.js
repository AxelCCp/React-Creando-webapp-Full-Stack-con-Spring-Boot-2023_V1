import { AddProductCart, DeleteProductCart, UpdateQuantityProductCart } from "./itemsActions";

export const itemsReducer = (state=[], action) => {
    
    switch (action.type) {

        case AddProductCart:
            return [
                ...state,                                                                               //se conservan los datos q ya se tienen en el carro de compras.
                {
                    product : action.payload,                                                                                // esto es igual a product : product.
                    quantity: 1,
                }
            ];
    
        case UpdateQuantityProductCart:        
            return state.map((i) => {
                if(i.product.id === action.payload.id){
                    return {
                        //devuelve el producto como ya estaba, pero actualiza su cantidad.
                        ...i,
                        quantity : i.quantity + 1,
                    };
                }
                return i;
            });

        case DeleteProductCart:         
            return [
                ...state.filter((i) => i.product.id !== action.payload)
            ];
        
        default:
            return state;
    }
}