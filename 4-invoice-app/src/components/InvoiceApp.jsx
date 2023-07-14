import { getInvoice } from "../services/getInvoice";

export const InvoiceApp = () => {

    //DESESTRUCTURACIÓN
    const {id, name, client, company, items} = getInvoice();

    const {name: nameClient, lastname, address} = client;               //nameClient es un alias de name.

    const {country, city, street, number} = address;

    return (
        <>
            <h1>Ejemplo Factura</h1>
            <ul>
                <li>id: {id}</li>
                <li>name: {name}</li>
            </ul>
            <h3>Datos del cliente</h3>
            <ul>
                <li>{nameClient} {lastname}</li>
                <li>{country}</li>
                <li>{city}</li>
                <li>{street} {number}</li>
            </ul>
            <h3>Datos de la Empresa:</h3>
            <ul>
                <li>{company.name}</li>
                <li>{company.fiscalNumber}</li>
            </ul>
            <h3>Datos de la factura:</h3>
            <table>
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(({product, price, quantity}) => { //ESTA LINEA ESTA DESESTRUCTURADA, SE PODRIA PONER MAP(ITEM)
                        return (
                        <tr>
                            <td>{product}</td>
                            <td>{price}</td>
                            <td>{quantity}</td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
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