

export const CartApp = () => {
    return(
        <>
        
            <div className="container">
                <h3>Cart app</h3>
                <div className="row">
                    <div className="col-4 my-2">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Teclado mecanico rgb</h5>
                                <p className="card-text">teclado mecanico con luces rgb y switch cherry red</p>
                                <p className="card-text">$ 1000</p>      
                                <button className="btn btn-primary">agregar</button>  
                            </div>
                        </div>
                    </div>

                    <div className="col-4 my-2">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Samsung smart tv</h5>
                                <p className="card-text">ajhkdadasdaad</p>
                                <p className="card-text">$ 700</p>      
                                <button className="btn btn-primary">agregar</button>  
                            </div>
                        </div>
                    </div>

                    <div className="col-4 my-2">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">smart phone</h5>
                                <p className="card-text">kjhkjhjkhkjh</p>
                                <p className="card-text">$ 6000</p>      
                                <button className="btn btn-primary">agregar</button>  
                            </div>
                        </div>
                    </div>

                    <div className="col-4 my-2">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">pc gamer</h5>
                                <p className="card-text">uiyuyuiyiuyuiyiuyiuy</p>
                                <p className="card-text">$ 3000</p>      
                                <button className="btn btn-primary">agregar</button>  
                            </div>
                        </div>
                    </div>

                    <div className="col-4 my-2">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">mouse</h5>
                                <p className="card-text">mbzmcbzcbnmxzbzx</p>
                                <p className="card-text">$ 300</p>      
                                <button className="btn btn-primary">agregar</button>  
                            </div>
                        </div>
                    </div>

                    <div className="col-4 my-2">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">monitor</h5>
                                <p className="card-text">ahgjhagdsdasdasd adad</p>
                                <p className="card-text">$ 500</p>      
                                <button className="btn btn-primary">agregar</button>  
                            </div>
                        </div>
                    </div>
                </div>

                <div className="my-4 w-50">
                    <h3>Carro de compras</h3>
                    <table className="table table-hover table-striped">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                                <th>Total</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>nombre</td>
                                <td>precio</td>
                                <td>cantidad</td>
                                <td>total</td>
                                <td>eliminar</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan="3" className="text-end fw-bold">Total</td>
                                <td colSpan="2" className="text-center fw-bold">12345</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </>
    )
}