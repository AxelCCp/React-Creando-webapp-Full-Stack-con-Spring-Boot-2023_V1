//FUNCIONES ANONIMAS

const hello = function(nombre='Pepe', age=0){
    const greeting = `Hola ${nombre}. Tu edad es ${age} años`;
    return greeting;
}
console.log(hello('Hada', 1000));


const suma = (a=0, b=0) => a + b;
console.log(suma(5, 7));