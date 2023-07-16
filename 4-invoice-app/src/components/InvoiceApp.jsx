import { getInvoice } from "../services/getInvoice";

export const InvoiceApp = () => {

    //DESESTRUCTURACIÓN
    const {id, name, client, company, items} = getInvoice();

    const {name: nameClient, lastname, address} = client;               //nameClient es un alias de name.

    const {country, city, street, number} = address;

    return (
        <>
            
            <div className="container">

                <div className="card my-3">

                <div className="card-header">
                    Ejemplo Factura
                </div>

                    <div className="card-body">
                    
                        <ul className="list-group">
                            <li className="list-group-item">id: {id}</li>
                            <li className="list-group-item">name: {name}</li>
                        </ul>

                        <div className="row my-3">
                            <div className="col"> 
                                <h3>Datos del cliente</h3>
                                <ul className="list-group">
                                    <li className="list-group-item active">{nameClient} {lastname}</li>
                                    <li className="list-group-item">{country} / {city}</li>
                                    <li className="list-group-item">{street} {number}</li>
                                </ul>
                            </div>
                            <div className="col"> 
                                <h3>Datos de la Empresa:</h3>
                                <ul className="list-group">
                                    <li className="list-group-item active">{company.name}</li>
                                    <li className="list-group-item">{company.fiscalNumber}</li>
                                </ul>
                            </div>
                        </div>

                        <h3>Datos de la factura:</h3>
                        
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>Producto</th>
                                    <th>Precio</th>
                                    <th>Cantidad</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map(({id, product, price, quantity}) => {        //ESTA LINEA ESTA DESESTRUCTURADA, SE PODRIA PONER MAP(ITEM)  //EL ID SE AGREGÓ PQ DA UN ERROR EN EL FRONT. PIDE UN ID UNICO PARA EL TR, KEY = {ID}
                                    return (
                                    <tr key={id}>                                       
                                        <td>{product}</td>
                                        <td>{price}</td>
                                        <td>{quantity}</td>
                                    </tr>
                                    )
                                })}
                            </tbody>
                        </table>

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