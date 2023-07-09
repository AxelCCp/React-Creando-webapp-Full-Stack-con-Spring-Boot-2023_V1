const invoice = {
    id: 10,
    name: 'Compras de oficina',
    date: new Date(),
    client: {
      id: 2,
      name: 'John',
      lastname: 'Doe',
      age: 20,  
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
    ],
    total: function(){
        let total = 0;
        this.items.forEach(item => {
            total = total + item.price * item.quantity;
        });
        return total;
    },
    greeting: function(){
        return `Hola ${this.client.name}`
    }
};

//CON ESTO EL INVOICE2 TERMINA SIENDO EL MISMO Q EL INVOICE1, USANDO EL MISMO ESPACIO EN LA MEMORIA.
//const invoice2 = invoice;

//POR LO TANTO SI SE QUIERE CLONAR, SE HACE ASÍ, Y CON ESTO SERÁN 2 OBJ DIFERENTES.
const invoice2 = {... invoice}                        //ESTE ES EL OPERADOR SPREAD.

const result = invoice === invoice2;

console.log(result);

invoice2.id = 20;

console.log(invoice.id);