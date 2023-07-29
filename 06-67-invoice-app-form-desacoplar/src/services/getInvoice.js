import { invoice } from "../data/invoice"

export const getInvoice = () => {
    
    //console.log(invoice)
    //return invoice;                       //INICIALMENTE SE DEVOLVÍA LA INVOICE, PERO AL AGREGARLE EL TOTAL, HAY Q DEVOLVER UN CLON DEL INVOICE + EL TOTAL.
    

    //LAS 2 MANERAS ESTÁN FUNCIONANDO...
    
        //FORMA 1 PARA CARCULAR EL TOTAL
        /*
        let total = 0;
        invoice.items.forEach(item => {
            total += item.price * item.quantity
        });
        */

        //FORMA 2 PARA CARCULAR EL TOTAL (CON REDUCE Y PROGRAMACION FUNCIONAL)
        const total = invoice.items
            .map(items => items.price * items.quantity)
            .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
        return {...invoice, total: total}
}