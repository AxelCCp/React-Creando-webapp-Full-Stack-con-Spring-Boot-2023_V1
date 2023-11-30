import { getInvoice } from "./services/getInvoice";
import { ClientView } from "./components/ClientView";
import { CompanyView } from "./components/CompanyView";
import { InvoiceView } from "./components/InvoiceView";
import { TableItemsView } from "./components/TableItemsView";
import { TotalView } from "./components/TotalView";
import { useState } from "react";

export const InvoiceApp = () => {

    const {total, id, name, client, company, items: itemsInitial} = getInvoice();

    const[productValue, setProductValue] = useState('');                                // '' : el valor inicial es "sin valor", campo vacio.
    
    const[priceValue, setPriceValue] = useState('');                                    //  useState(0);
    
    const[quantityValue, setQuantityValue] = useState('');                              //  useState(0);

    const[items, setItems] = useState(itemsInitial);                                    //  itemsInitial : estado inicial de los items (es el valor que se renombra en el getInvoice).  items : es el valor que es manejado por el useState.

    const[counter, setCounter] = useState(4);                                           //  se asigna el valor inicial en 4.

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

                       <form className="w-50" onSubmit={event => {
                            
                            event.preventDefault();                                                                                 //PREVIENE LA PERDIDA DE INFO SI ES Q SE RECARGA LA PAGINA. 
                            
                            if(productValue.trim().length <= 1) return;
                            
                            if(priceValue.trim().length <= 1) return;
                            
                            if(isNaN(priceValue.trim())) {
                                alert('El valor ingersado no es un número');    
                                return;
                            }
                            
                            if(quantityValue.trim().length < 1) return;
                            
                            if(isNaN(quantityValue.trim())) {
                                alert('El valor ingersado no es un número');  
                                return;
                            }       
                            
                            setItems([...items, {                                                                                   //AGREGA UN NUEVO ELEMENTO  AL ARRAY DE ELEMENTOS.   // ...items :  mantiene los elementos anteriores y agrega los nuevos.
                                id:counter, 
                                product:productValue.trim(),                                                                        //SE QUITAN LOS ESPACIOS EN BLANCO A LA IZQ Y DER. 
                                price:parseInt(priceValue, 10), 
                                quantity: parseInt(quantityValue, 10)
                            }]);
                            
                                                                                                                                    //SE LIMPIAN LOS DATOS DEL FOMULARIO DESPUES DE AGREGAR EL PRODUCTO.
                            setProductValue('');
                            setPriceValue('');
                            setQuantityValue('');
                            setCounter(counter+1);

                       }}>
                                                                                                                                    {/*  value : se usa para poder resetear el valor del input al apretar el boton de nuevo tem.*/}    

                            <input type="text" name="product" placeholder="Producto" value={productValue} className="form-control m-3" onChange={event => {console.log(event.target.value); setProductValue(event.target.value); }}/>
                            
                            <input type="number" name="price" placeholder="Precio" value={priceValue} className="form-control m-3" onChange={event => {console.log(event.target.value); setPriceValue(event.target.value); }}/>
                            
                            <input type="number" name="quantity" placeholder="Cantidad" value={quantityValue} className="form-control m-3" onChange={event => {console.log(event.target.value); setQuantityValue(event.target.value); }}/>
                       
                            <button type="submit" className="btn btn-primary m-3">Nuevo item</button>
                       
                       </form>

                    </div>

                </div>

            </div>
        </>
    )
}



/*
export const InvoiceApp = () => {
    const invoice = getInvoice();
    return (
        <>
            <h1>Ejemplo Factura</h1>
            <ul>
                <li>id: {invoice.id}</li>
                <li>name: {invoice.name}</li>
            </ul>
            <h3>Datos del cliente</h3>
            <ul>
                <li>{invoice.client.name}</li>
                <li>{invoice.client.lastname}</li>
                <li>{invoice.client.address.country}</li>
                <li>{invoice.client.address.city}</li>
                <li>{invoice.client.address.street} {invoice.client.address.number}</li>
            </ul>
        </>
    )
}
*/