import { getInvoice } from "./services/getInvoice";
import { ClientView } from "./components/ClientView";
import { CompanyView } from "./components/CompanyView";
import { InvoiceView } from "./components/InvoiceView";
import { TableItemsView } from "./components/TableItemsView";
import { TotalView } from "./components/TotalView";
import { useState } from "react";

export const InvoiceApp = () => {

    const {total, id, name, client, company, items: itemsInitial} = getInvoice();

    /* //67
    const[productValue, setProductValue] = useState('');
    const[priceValue, setPriceValue] = useState('');
    const[quantityValue, setQuantityValue] = useState('');
    */

    //68 UN SOLO STATE PARA TODOS LOS INPUT ------------------
    const [formItemsState, setFormItemsState] = useState({
        product: '',                                                                               // '' valores por defecto 
        price: '',
        quantity: '',
    });

    const {product, price, quantity} = formItemsState;

    //--------------------------------------------------------
    
    const[items, setItems] = useState(itemsInitial); 
    
    const[counter, setCounter] = useState(4);



    //68 se juntan los onchange
    const onInputChange = ({target: {name, value}}) => {                                                                                         //DEL TARGET DEL FORMULARIO SE DESESTRUCTURA EL NAME Y EL VALUE.
        
        console.log(name); 
        console.log(value); 
        
        setFormItemsState({
            ...formItemsState,                                                                                                                  //se mantienen los datos que se tienen en cada campo que no se modificó.
            [name] : value                                                                                                                      //[AGREGA EL NOMBRE DEL CAMPO] : Y SU VALOR. Estos son nombre y valor variables, según el campo. Es una propiedad computada del objeto.
        }); 
  
    }

    /* //67
    const onProductChange = ({target}) => {
        console.log(target.value);
        setProductValue(target.value);
    } 

    const onPriceChange = ({target}) => {
        console.log(target.value);
        setProductValue(target.value);
    } 

    const onQuantityChange = ({target}) => {
        console.log(target.value);
        setProductValue(target.value);
    } 
    */
 
    
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
        
        setItems([...items, {                                                                                                                //AGREGA UN NUEVO ELEMENTO  AL ARRAY DE ELEMENTOS.
            id:counter, 
            product:product.trim(),                                                                                                          //SE QUITAN LOS ESPACIOS EN BLANCO A LA IZQ Y DER. 
            price:parseInt(price, 10), 
            quantity: parseInt(quantity, 10)
        }]);

        
        /* //67
        setProductValue('');
        setPriceValue('');
        setQuantityValue('');
        */
                                                                                                                                            //SE LIMPIAN LOS DATOS DEL FOMULARIO DESPUES DE AGREGAR EL PRODUCTO.
        
        //68                                                                                                                                        
        setFormItemsState({
            product: '',                                                                               
            price: '',
            quantity: '',
        });
        
        setCounter(counter+1);
   }  


    return (
        <>

            <div className="container">

                <div className="card my-3">

                <div className="card-header">
                    Ejemplo Factura
                </div>

                    <div className="card-body">
                    
                        <InvoiceView id={id} name={name}/>

                        <div className="row my-3">
                            <div className="col">

                                <h3>Datos del cliente</h3>
                                <ClientView client={client}/>

                            </div>
                            <div className="col"> 
                                
                                <h3>Datos de la Empresa:</h3>
                                <CompanyView company={company}/>
                            </div>
                        </div>

                        /* TABLA */
                       <TableItemsView title="Datos de la factura:" items={items}/>

                       /*TOTAL*/
                       <TotalView total= {total}/>

                       <form className="w-50" onSubmit={event => onInvoiceItemsSubmit(event)}>

                            <input type="text" name="product" placeholder="Producto" value={product} className="form-control m-3" onChange={onInputChange}/>

                            <input type="number" name="price" placeholder="Precio" value={price} className="form-control m-3" onChange={event => onInputChange(event)}/>

                            <input type="number" name="quantity" placeholder="Cantidad" value={quantity} className="form-control m-3" onChange={event => onInputChange(event)}/>
                       
                            <button type="submit" className="btn btn-primary m-3">Nuevo item</button>
                       
                       </form>

                    </div>

                </div>

            </div>
        </>
    )
}
