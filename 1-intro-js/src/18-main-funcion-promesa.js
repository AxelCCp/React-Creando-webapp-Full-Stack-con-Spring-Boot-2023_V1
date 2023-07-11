import {invoiceById, findInvoiceById} from './16-data/16-invoices';



findInvoiceById(3).then((result) => {
    console.log('realizada alguna tarea con delay')
    console.log(result);
}).catch((error) => {
    console.error(error);
});




