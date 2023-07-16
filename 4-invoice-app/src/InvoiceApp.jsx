import { getInvoice } from "./services/getInvoice";
import { ClientView } from "./components/ClientView";
import { CompanyView } from "./components/CompanyView";
import { InvoiceView } from "./components/InvoiceView";
import { TableItemsView } from "./components/TableItemsView";
import { TotalView } from "./components/TotalView";

export const InvoiceApp = () => {

    //DESESTRUCTURACIÓN
    const {total, id, name, client, company, items} = getInvoice();

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