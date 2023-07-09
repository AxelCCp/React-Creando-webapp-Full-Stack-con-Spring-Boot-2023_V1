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
    total: 1000,
    greeting: function(){
        return `Hola ${this.client.name}`
    }
};


//modificando --- 

invoice.client.name = 'Pepe';

console.log(invoice)

const greeting = invoice.greeting();
console.log(greeting);