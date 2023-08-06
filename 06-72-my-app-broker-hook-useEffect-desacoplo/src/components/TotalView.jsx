import PropTypes from  'prop-types';

export const TotalView = ({totalInversion, totalValorAct, totalProfit}) => {

    return(
        <>
        <h4>Rendimiento de operaciones cerradas:</h4>
        <div className="text-end">
        
            <ul className="list-group">
                <li className="list-group-item text-center">Inversión total:     {totalInversion}</li>
                <li className="list-group-item text-center">Valor actual total:  {totalValorAct}</li>
                <li className="list-group-item text-center">Ganancia total:      {totalProfit}</li>
            </ul>
        </div>
        </>
    )
}