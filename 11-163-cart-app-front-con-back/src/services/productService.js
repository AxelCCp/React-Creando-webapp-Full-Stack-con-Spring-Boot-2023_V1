//se usa fetch para conectar con el api rest de spring:
export const getProducts = async() => {                                                         //dentro de una llamada asincrona se usa el await.
    const response = await fetch('http://localhost:8080/products');                             //await : con await se obtiene solo el json de la respuesta y no el response.
    const products = await response.json();                                                     
    return products;                                                                            //se devuelve un a promesa de producto.
}

export const calculateTotal = (items) => {
    return items.reduce(
        (accumulator, item) => accumulator + item.product.price * item.quantity
        , 0);
}