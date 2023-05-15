import './styles.css';
import Table from '../Table';
import UserContext from '../../contexts/UserContext';
import ArrowDown from '../../assets/down-arrow.svg'
import { useContext, useState } from 'react';
import { sortListByItem } from '../../utils/sort'

export default function TableContainer() {

    const { setEnergyConsumption, supplierList, setSupplierList } = useContext(UserContext)
    const [showSortList, setShowSortList] = useState<Boolean>(false)

    function clearEnergyConsumptionValue() {
        setEnergyConsumption(
            {
                definedStatus: false
            })
    }

    function toggleShowSortList() {
        setShowSortList(!showSortList)
    }

    return (
        <div className='filter-and-table'>
            <div className='sort'
                onClick={() => { toggleShowSortList() }}>
                <img
                    className="sort-icon"
                    src={ArrowDown}
                    alt="ordenar-lista"
                />
                <span> ORDENAR </span>
            </div>
            {showSortList &&
                <div className='sort-by-list'>
                    <div className='sort-by-item'
                        onClick={() => sortListByItem("name", supplierList, setSupplierList, setShowSortList)}
                    >
                        <span>NOME</span>
                    </div>
                    <div className='sort-by-item'
                        onClick={() => sortListByItem("origin_state", supplierList, setSupplierList, setShowSortList)}>
                        <span>ESTADO</span>
                    </div>
                    <div className='sort-by-item'
                        onClick={() => sortListByItem("cost_per_kwh", supplierList, setSupplierList, setShowSortList)}>
                        <span>CUSTO POR KWH</span>
                    </div>
                    <div className='sort-by-item'
                        onClick={() => sortListByItem("total_customers", supplierList, setSupplierList, setShowSortList)}>
                        <span>NUMERO CLIENTES</span>
                    </div>
                    <div className='sort-by-item'
                        onClick={() => sortListByItem("customers_score", supplierList, setSupplierList, setShowSortList)}>
                        <span>AVALIAÇÃO</span>
                    </div>
                </div>}
            <Table />
            <button className='set-new-consumption-button'
                onClick={() => { clearEnergyConsumptionValue() }}
            >Alterar Consumo Mensal</button>
        </div>
    )
}