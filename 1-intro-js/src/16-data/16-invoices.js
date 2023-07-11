
export const lapices = {
    producto: 'lapices',
    price: 100,
    quantity: 10,
};


export const invoices = [
    {
        id: 1,
        name: 'Compras de oficina',
        client: {
          name: 'John',
          lastname: 'Doe',
        },
        items: [
            {
                producto: 'keyboard',
                price: 399,
                quantity: 2,
            },
            {
                producto: 'mouse',
                price: 200,
                quantity: 1,
            },
            {
                producto: 'paper',
                price: 100,
                quantity: 10,
            }
        ]
    },

    {
        id: 2,
        name: 'Compras de computacion',
        client: {
          name: 'John',
          lastname: 'Doe',
        },
        items: [
            {
                producto: 'keyboard',
                price: 399,
                quantity: 2,
            },
            {
                producto: 'mouse',
                price: 200,
                quantity: 1,
            },
            {
                producto: 'monitor',
                price: 100,
                quantity: 10,
            }
        ]
    },

    {
        id: 3,
        name: 'Compras de papeleria',
        client: {
          name: 'John',
          lastname: 'Doe',
        },
        items: [
            {
                producto: 'papel',
                price: 399,
                quantity: 2,
            },
            lapices
        ]
    }   

];



export const result = (clientName) => {
    return invoices.some(i => i.client.name === clientName);
}   

//EXP SI NOMBRE , SE USA DEFAULT
export default (desc) => {
    return invoices.find(i => i.name === desc);
}


export const invoiceById = (id) => {
    return invoices.find(i => i.id === id);
}


export const findInvoiceById = (id) =>{
    
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = invoiceById(id);
            if(result){
                resolve(result);                      //EL RESOLVE INVOCA AL THEN
            } else{
                reject('error, no existe la factura por el id.')
            }
        }, 2500);
    });
    return promise;
}
