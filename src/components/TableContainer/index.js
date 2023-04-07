import './styles.css';
import Table from '../Table';

import { useContext } from 'react';
import UserContext from '../../contexts/UserContext';

// import Filter from '../../components/Filter';
// import FilterBox from '../../components/FilterBox';

export default function TableContainer() {

    const { setEnergyConsumption } = useContext(UserContext)

    function clearEnergyConsumptionValue() {
        setEnergyConsumption(
            {
                definedStatus: false
            })
    }

    return (
        <div className='filter-and-table'>
            <div>
                {/* <Filter ></Filter>
                <FilterBox></FilterBox> */}
            </div>
            <Table></Table>
            <button className='set-new-consumption-button'
                onClick={() => { clearEnergyConsumptionValue() }}
            >Alterar Consumo Mensal</button>
        </div>
    )
}