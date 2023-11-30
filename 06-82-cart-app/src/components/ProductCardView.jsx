
export const ProductCardView = ({handler, id, name, description, price}) => {
  
  const onAddProduct = (product) => {                                       //recibe por argumento el producto del card que esta en este jsx.
    console.log(product);
    handler(product);                                                       //se llama a la funcion y se pasa el producto a traves de los componentes padre hasta llegar a CartApp para agegarlo al carro.
  }

  return (
    <>
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">$ {price}</p>      
                <button className="btn btn-primary"
                onClick={() => onAddProduct({id, name, description, price})}>agregar</button>  
            </div>
        </div>
    </>
  )
}
