
const lapices = {
    producto: 'lapices',
    price: 100,
    quantity: 10,
};


const invoices = [
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

const invoiceCompOficina = invoices.find(i => i.name === 'Compras de oficina');
console.log(invoiceCompOficina);

//---------FILTER------------facturas con id > 1
const invoiceFilter = invoices.filter(i => i.id > 1);
console.log(invoiceFilter);

//----filter + includes-----
const invoiceFilterIncludes = invoices.filter(i => i.items.includes(lapices));
console.log(invoiceFilterIncludes);

//--------SOME -------DEVUELVE TRUE O FALSE
const result = invoices.some(i => i.client.name === 'John');
console.log(result);

//ELIMINAR CON FILTER ---- ESTO CREA UNA NUEVA INSTANCIA DE LISTA DE INVOICE
const invoiceDelete = invoices.filter(i => i.id != 2);
console.log(invoiceDelete);