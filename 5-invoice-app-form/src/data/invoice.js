export const invoice = {
    id: 10,
    name: 'Componentes PC',
    client: {
        name: 'Pepe',
        lastname: 'Doe',
        address: {
            country: 'USA',
            city: 'Los Ángeles',
            street: 'One Street',
            number: 12
        }
    },
        company: {
            name: 'New egg',
            fiscalNumber: 1234567,
        },
        items: [
            {
                id: 1,
                product: 'CPU intel i7',
                price: 499,
                quantity: 5,
            },
            {
                id: 2,
                product: 'Corsair Keyboard mecanico',
                price: 150,
                quantity: 1,
            },
            {
                id: 3,
                product: 'Monitor asus',
                price: 300,
                quantity: 1,
            }
        ]
    
}