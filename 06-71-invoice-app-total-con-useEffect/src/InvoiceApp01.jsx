import { getInvoice, calculateTotal} from "./services/getInvoice";
import { ClientView } from "./components/ClientView";
import { CompanyView } from "./components/CompanyView";
import { InvoiceView } from "./components/InvoiceView";
import { TableItemsView } from "./components/TableItemsView";
import { TotalView } from "./components/TotalView";
import { useEffect, useState } from "react";


const invoiceInitial = {                                           
    id: 0,
    name: '',
    client: {
        name: '',
        lastname: '',
        address: {
            country: '',
            city: '',
            street: '',
            number: 0
        }
    },
        company: {
            name: '',
            fiscalNumber: 0,
        },
        items: []
}


export const InvoiceApp01 = () => {

    const [total, setTotal] = useState(0);

    const[counter, setCounter] = useState(4);

    const [invoice, setInvoice] = useState(invoiceInitial);                                        //con use state la factura es manejada por el estado de rect. se define el estado de la factura.

    const[items, setItems] = useState([]); 
    
    const [formItemsState, setFormItemsState] = useState({                                         //68 UN SOLO STATE PARA TODOS LOS INPUT
        product: '',                                                                               // '' valores por defecto 
        price: '',
        quantity: '',
    });

    const {id, name, client, company} = invoice;

    const {product, price, quantity} = formItemsState;

    useEffect(() => {                                                                               //ESTO ES PARA MODIFICAR LA INVOICE EN UN EVENTO DEL CICLO DE VIDA Q SE EJECUTA LA 1RA VEZ, CUANDO SE CREA EL COMPONENTE.
        const data = getInvoice();
        console.log(invoice);
        setInvoice(data);
        setItems(data.items);
    }, []);   
    
    useEffect(() => {
        //console.log('el precio ha sido modificado')                                                 // [] cuando un cambio en la dependencia q esta dentro de [], se ejecuta el codigo q esta dentro de {}
    }, [price]);  
    
    useEffect(() => {
        //console.log('el formItemsState ha sido modificado')
    }, [formItemsState]);                                                                           //formItemsState : SE EJECUTA EL CÓDIGO CON EL CAMBIO EN CUALQUIERA DE LOS CAMPOS.         
    
                                                                                                    
    useEffect(() => {
        //console.log('el counter ha sido modificado')                                                 
    }, [counter]);  
    

    useEffect(() => {
        //console.log('los items han sido modificados')     
        setTotal(calculateTotal(items));                                            
    }, [items]);  
    
    


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
        setItems([...items, {                                                                                                                    //AGREGA UN NUEVO ELEMENTO  AL ARRAY DE ELEMENTOS.
            id:counter, 
            product:product.trim(),                                                                                                          //SE QUITAN LOS ESPACIOS EN BLANCO A LA IZQ Y DER. 
            price:parseInt(price, 10), 
            quantity: parseInt(quantity, 10)
        }]);
                                                                                                                                                //SE LIMPIAN LOS DATOS DEL FOMULARIO DESPUES DE AGREGAR EL PRODUCTO.
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
