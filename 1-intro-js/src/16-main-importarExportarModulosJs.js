
import AAA, {lapices, invoices, result} from './16-data/16-invoices';


const invoicesName= invoices.map(i => {
    return i.name;
});
console.log(invoicesName);

const invoicesClone= invoices.map(i => {
    return i;
});
console.log(invoicesClone);

//--------FIND-------------

const invoice3 = invoices.find(i => i.id === 3);
console.log(invoice3)

//const invoiceCompOficina = invoices.find(i => i.name === 'Compras de oficina');
console.log(AAA('Compras de oficina'));

//---------FILTER------------facturas con id > 1
const invoiceFilter = invoices.filter(i => i.id > 1);
console.log(invoiceFilter);

//----filter + includes-----
const invoiceFilterIncludes = invoices.filter(i => i.items.includes(lapices));
console.log(invoiceFilterIncludes);

//--------SOME -------DEVUELVE TRUE O FALSE
//const result = invoices.some(i => i.client.name === 'John');
console.log('Buscar por nombre de cliente')
console.log(result('John'));

//ELIMINAR CON FILTER ---- ESTO CREA UNA NUEVA INSTANCIA DE LISTA DE INVOICE
const invoiceDelete = invoices.filter(i => i.id != 2);
console.log(invoiceDelete);


