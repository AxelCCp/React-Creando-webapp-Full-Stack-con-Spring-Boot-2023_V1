import './App.css'
import { getInversion} from "./service/getInversion";
import { InversionView } from "./components/inversionView";
import { ClientView } from "./components/ClientView";
import { ContactView } from "./components/ContactView";
import { TableItemsView } from "./components/TableItemsView";
import { TotalView } from "./components/TotalView";

export const App = () => {

  const {id, name, client, contact, items, totalInversion, totalValorAct, totalProfit} = getInversion();

  return(
    <>
        <div className='container'>
        <h3>Perfil del cliente</h3>

            <div className='card my-3'>

              <div className='card-header'>
                Tus instrumentos de inversión
              </div>
              
              <div className='card-body'>
                  <InversionView id={id} name={name}/>
              </div>

              <div className="row my-3">

                <div className="col">
                    <h3>Datos del cliente:</h3>
                    <ClientView client={client}/>
                </div>

                <div className="col">     
                    <h3>Datos de la Empresa:</h3>
                    <ContactView contact={contact}/>
                </div>

              </div>

              <TableItemsView title="Detalle de inversiones:" items={items}/>

              <TotalView totalInversion={totalInversion} totalValorAct={totalValorAct} totalProfit={totalProfit} />

            </div>

        </div>

    </>
  )

}
