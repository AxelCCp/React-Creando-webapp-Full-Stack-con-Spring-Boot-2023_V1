function sayHello(){
    //console.log('Hola mundo function!');
    const greeting = 'Hola mundo function!';
    return greeting;
}


//sayHello();

const result = sayHello();
console.log(result);


function sayHello2(nombre){
    const greeting = `Hola ${nombre}!`;
    return greeting;
}


console.log(sayHello2('Dennys'));