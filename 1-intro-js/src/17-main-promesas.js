import {invoiceById} from './16-data/16-invoices';

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const result = invoiceById(6);
        if(result){
            resolve(result);                      //EL RESOLVE INVOCA AL THEN
        } else{
            reject('error, no existe la factura por el id.')
        }
    }, 2500);
});

promise.then((result) => {
    console.log('realizada alguna tarea con delay')
    console.log(result);
}).catch((error) => {
    console.error(error);
});





