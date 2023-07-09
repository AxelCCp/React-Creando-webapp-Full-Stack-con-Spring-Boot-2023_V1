const products = ['mesa', 'silla', 'notebook', 'teclado'];

products.push('pantalla');

console.log(products);

products.push('mouse', 'tv', 'silla2');

console.log(products);

products.forEach(p => console.log(p));

for(let p of products){
    console.log(p);
}

