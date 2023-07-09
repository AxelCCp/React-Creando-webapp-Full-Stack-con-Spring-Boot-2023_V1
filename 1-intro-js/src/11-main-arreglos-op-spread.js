const products = ['mesa', 'silla', 'notebook', 'teclado'];
products.push('mouse', 'tv', 'silla2');

const fruits = ['manzana','pera','sandia','melon'];

//const mercado = [...fruits, ...products];

const mercado = [...fruits, ...products, 'lechuga', 'papas', 'zanahoria'];

console.log(mercado);


//-------------------------

const productsX = ['uva', 'mora', 'papaya'];

const productsY = productsX.concat('limon','cebolla');

console.log(productsY);

const productsZ = productsY.concat(['naranja', 'mango']);

console.log(productsZ);


