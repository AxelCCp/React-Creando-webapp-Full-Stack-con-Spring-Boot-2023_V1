import PropTypes from  'prop-types';

export const TotalOpenView = ({totalInversionOpen, totalValorActOpen, totalProfitOpen}) => {

    return(
        <>
        <h4>Rendimiento de operaciones abiertas:</h4>
        <div className="text-end">
        
            <ul className="list-group">
                <li className="list-group-item text-center">Inversión total:     {totalInversionOpen}</li>
                <li className="list-group-item text-center">Valor actual total:  {totalValorActOpen}</li>
                <li className="list-group-item text-center">Ganancia total:      {totalProfitOpen}</li>
            </ul>
        </div>
        </>
    )
}