import './styles.css';

import Triangle from '../../assets/Triangle.svg'
import { useState } from 'react'
import TableRow from '../TableRow';

import NavRight from '../../assets/navigate_right.png';
import NavLeft from '../../assets/navigate_left.png';

import { useContext } from 'react';
import UserContext from '../../contexts/UserContext';

import { sortUpString, sortDownString, sortUpNumber, sortDownNumber } from '../../utils/sort'

export default function Table() {

    const { supplierList, setSupplierList } = useContext(UserContext)

    const [sortList, setSortList] = useState(
        {
            name: false,
            origin_state: false,
            cost_per: false,
            total_costumers: false,
            costumers_score: false
        })

    const [page, setPage] = useState(1)
    const maxNumberPerPage = 5

    function sortListByColumn(choosedColumn) {
        const resetSort = {
            name: false,
            origin_state: false,
            cost_per: false,
            total_costumers: false,
            costumers_score: false
        }

        setSortList({ ...resetSort, [choosedColumn]: !sortList[choosedColumn] })

        let localSupplierList = [...supplierList]

        if (choosedColumn === "name" || choosedColumn === "origin_state") {
            localSupplierList = sortList[choosedColumn] ? sortUpString(localSupplierList, choosedColumn) : sortDownString(localSupplierList, choosedColumn)
        } else {
            localSupplierList = sortList[choosedColumn] ? sortUpNumber(localSupplierList, choosedColumn) : sortDownNumber(localSupplierList, choosedColumn)
        }
        setSupplierList(localSupplierList)
    }

    function ajustPage(list) {
        const itemsCountEnd = (maxNumberPerPage * page);
        const itemsCountStart = maxNumberPerPage * (page - 1);

        return list.slice(itemsCountStart, itemsCountEnd)
    }

    function decreasePage(event) {
        event.preventDefault();
        event.stopPropagation();

        if (page === 1) {
            return
        }

        const decreasedPage = page - 1
        setPage(decreasedPage)
    }

    function increasePage(event, list) {
        event.preventDefault();
        event.stopPropagation();

        if (((page * maxNumberPerPage)) >= list.length) {
            return
        }

        const increasedPage = page + 1
        setPage(increasedPage)
    }

    return (
        <div className='table'>
            <div className='table-header'>
                <div className='table-row-section table-row-logo'></div>
                <div className='table-row-section name'>
                    <span className='description'> Fornecedor </span>
                    <img
                        className="triangle-img"
                        src={Triangle}
                        alt="ordenar-lista"
                        onClick={() => sortListByColumn("name")}
                    />
                </div>

                <div className='table-row-section origin-state'>
                    <span className='description'>Estado de Origem</span>
                    <img
                        className="triangle-img"
                        src={Triangle}
                        alt="ordenar-lista"
                        onClick={() => sortListByColumn("origin_state")}
                    />
                </div>

                <div className='table-row-section cost-per-kwh'>
                    <span className='description'>Custo/kWh</span>
                    <img
                        className="triangle-img"
                        src={Triangle}
                        alt="ordenar-lista"
                        onClick={() => sortListByColumn("cost_per_kwh")}
                    />
                </div>

                <div className='table-row-section total-clients'>
                    <span className='description'>Número Total de Clientes</span>
                    <img
                        className="triangle-img"
                        src={Triangle}
                        alt="ordenar-lista"
                        onClick={() => sortListByColumn("total_costumers")}
                    />
                </div>

                <div className='table-row-section score'>
                    <span className='description'>Avaliação de Clientes</span>
                    <img
                        className="triangle-img"
                        src={Triangle}
                        alt="ordenar-lista"
                        onClick={() => sortListByColumn("costumers_score")}
                    />
                </div>
            </div>
            {
                ajustPage(supplierList).map((supplier) => (
                    <TableRow
                        key={supplier.id}
                        supplier={supplier}
                    />
                ))
            }
            <div className='table-footer'>
                <img
                    className="page-nav-img"
                    src={NavLeft}
                    alt="retomar-pagina"
                    onClick={(event) => decreasePage(event)}
                />
                <img
                    className="page-nav-img"
                    src={NavRight}
                    alt="avançar-pagina"
                    onClick={(event) => increasePage(event, supplierList)}
                />
            </div>
        </div>
    )
}