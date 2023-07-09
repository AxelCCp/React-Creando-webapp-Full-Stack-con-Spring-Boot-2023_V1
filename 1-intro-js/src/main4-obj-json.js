const invoice = {
    id: 10,
    name: 'Compras de oficina',
    date: new Date(),
    client: 'John Doe',
    total: 1000,
};

console.log(invoice);
console.log(invoice.name);


//----modificando

invoice.total = 1500;
invoice.name = 'Compras supermercado';

console.log(invoice);