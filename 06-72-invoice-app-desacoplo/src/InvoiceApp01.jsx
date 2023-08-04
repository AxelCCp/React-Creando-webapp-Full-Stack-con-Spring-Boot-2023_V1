import { getInvoice, calculateTotal} from "./services/getInvoice";
import { ClientView } from "./components/ClientView";
import { CompanyView } from "./components/CompanyView";
import { InvoiceView } from "./components/InvoiceView";
import { TableItemsView } from "./components/TableItemsView";
import { TotalView } from "./components/TotalView";
import { useEffect, useState } from "react";
import { FormItemsView } from "./components/FormItemsView";


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

    const[activeForm, setActiveForm] = useState(false);                                            //false es el valor por defecto.

    const [total, setTotal] = useState(0);

    const[counter, setCounter] = useState(4);

    const [invoice, setInvoice] = useState(invoiceInitial);                                        //con use state la factura es manejada por el estado de rect. se define el estado de la factura.

    const[items, setItems] = useState([]); 
    
    const {id, name, client, company} = invoice;


    useEffect(() => {                                                                               //ESTO ES PARA MODIFICAR LA INVOICE EN UN EVENTO DEL CICLO DE VIDA Q SE EJECUTA LA 1RA VEZ, CUANDO SE CREA EL COMPONENTE.
        const data = getInvoice();
        console.log(invoice);
        setInvoice(data);
        setItems(data.items);
    }, []);   
      
    
    useEffect(() => {
        //console.log('el counter ha sido modificado')                                                 
    }, [counter]); 
    

    useEffect(() => {
        //console.log('los items han sido modificados')     
        setTotal(calculateTotal(items));                                            
    }, [items]);  
    

    const handlerAddItems = ({product, price, quantity}) => {                                                                                                    //SE PASA EL EVENT SIN DESESTRUCTURAR
        setItems([...items, {                                                                                                                    //AGREGA UN NUEVO ELEMENTO  AL ARRAY DE ELEMENTOS.
            id:counter, 
            product: product.trim(),                                                                                                          //SE QUITAN LOS ESPACIOS EN BLANCO A LA IZQ Y DER. 
            price: parseInt(price, 10), 
            quantity: parseInt(quantity, 10)
        }]);                                                                                                                                    
        setCounter(counter+1);
   }
   
   const handlerDeleteitem = (id) => {
        setItems(items.filter(item => item.id !== id))
   }

   const onActiveForm = () => {
        setActiveForm(!activeForm);
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

                        
                       <TableItemsView title="Datos de la factura:" items={items} handlerDeleteitem={id => handlerDeleteitem(id)}/>

                       
                        <TotalView total= {total}/>
                        
                        <button className="btn btn-secondary" onClick={onActiveForm}>{ !activeForm ? 'Agregar item' : 'Ocultar form' }</button>

                        { !activeForm ? '' : <FormItemsView handler={(newItem) => handlerAddItems(newItem)}/> }
                       
                    </div>

                </div>

            </div>
        </>
    )
}
