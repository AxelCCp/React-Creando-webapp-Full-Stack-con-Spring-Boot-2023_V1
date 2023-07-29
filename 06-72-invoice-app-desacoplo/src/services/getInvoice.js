import { invoice } from "../data/invoice"

export const getInvoice = () => {
    
        const total = calculateTotal(invoice.items)
           
        return {...invoice, total: total}
}



export const calculateTotal = (items=[]) => {
    return items
        .map(items => items.price * items.quantity)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
}