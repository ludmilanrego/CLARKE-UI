import './styles.css';

export default function TableRow({ supplier }) {

    return (
        <div className='table-row'>

            <div className='table-row-section table-row-logo'>
                <img
                    className="supplier-logo-img"
                    src={supplier.img}
                    alt="logo-empresa"
                ></img>
            </div>

            <div className='table-row-section name'>
                <span className='description'> {supplier.name} </span>
            </div>

            <div className='table-row-section origin-state'>
                <span className='description'>{supplier.origin_state}</span>
            </div>

            <div className='table-row-section cost-per-kwh'>
                <span className='description'>{supplier.cost_per_kwh / 100}</span>
            </div>

            <div className='table-row-section total-clients'>
                <span className='description'>{supplier.total_customers}</span>
            </div>

            <div className='table-row-section score'>
                <span className='description'>{supplier.costumers_score}</span>
            </div>
        </div >
    )
}
