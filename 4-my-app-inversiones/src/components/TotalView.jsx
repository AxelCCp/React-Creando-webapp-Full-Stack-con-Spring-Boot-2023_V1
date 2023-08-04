import PropTypes from  'prop-types';

export const TotalView = ({totalInversion, totalValorAct, totalProfit}) => {

    return(
        <>
        <div className="text-end">
            <ul className="list-group">
                <li className="list-group-item text-start">Inversión total:     {totalInversion}</li>
                <li className="list-group-item text-start">Valor actual total:  {totalValorAct}</li>
                <li className="list-group-item text-start">Ganancia total:      {totalProfit}</li>
            </ul>
        </div>
        </>
    )
}