import { useEffect, useState } from "react";

export  const FormItemsView = ({handler}) => {


    const [formItemsState, setFormItemsState] = useState({                                         //68 UN SOLO STATE PARA TODOS LOS INPUT
        product: '',                                                                               // '' valores por defecto 
        price: '',
        quantity: '',
    });

    const {product, price, quantity} = formItemsState;

    useEffect(() => {
        //console.log('el precio ha sido modificado')                                                 // [] cuando un cambio en la dependencia q esta dentro de [], se ejecuta el codigo q esta dentro de {}
    }, [price]);  
    
    useEffect(() => {
        //console.log('el formItemsState ha sido modificado')
    }, [formItemsState]);                                                                           //formItemsState : SE EJECUTA EL CÓDIGO CON EL CAMBIO EN CUALQUIERA DE LOS CAMPOS.         
    
    //67 DESACOPLO
    const onInputChange = ({target: {name, value}}) => {                                                                                         //DEL TARGET SE DESESTRUCTURA EL NAME Y EL VALUE
        console.log(name); 
        console.log(value); 
        setFormItemsState({
            ...formItemsState,
            [name] : value                                                                                                                      //[AGREGA EL NOMBRE DEL CAMPO] : Y SU VALOR
        }); 
    }


    const onInvoiceItemsSubmit = (event) => {                                                                                                    //SE PASA EL EVENT SIN DESESTRUCTURAR

        event.preventDefault();                                                                                                                 //PREVIENE LA PERDIDA DE INFO SI ES Q SE RECARGA LA PAGINA. 
        
        if(product.trim().length <= 1) return;
        if(price.trim().length <= 1) return;
        if(isNaN(price.trim())) {
            alert('El valor ingersado no es un número');    
            return;
        }
        if(quantity.trim().length < 1) return;
        if(isNaN(quantity.trim())) {
            alert('El valor ingersado no es un número');  
            return;
        }       
        
        handler(formItemsState);
                                                                                                                                                //SE LIMPIAN LOS DATOS DEL FOMULARIO DESPUES DE AGREGAR EL PRODUCTO.
        setFormItemsState({                                                                                                                     
            product: '',                                                                               
            price: '',
            quantity: '',
        });
        
   }  
 

    return (
        <>

        <form className="w-50" onSubmit={event => onInvoiceItemsSubmit(event)}>

        <input type="text" name="product" placeholder="Producto" value={product} className="form-control m-3" onChange={onInputChange}/>

        <input type="number" name="price" placeholder="Precio" value={price} className="form-control m-3" onChange={event => onInputChange(event)}/>

        <input type="number" name="quantity" placeholder="Cantidad" value={quantity} className="form-control m-3" onChange={event => onInputChange(event)}/>

        <button type="submit" className="btn btn-primary m-3">Nuevo item</button>

        </form>


        </>
    )
}