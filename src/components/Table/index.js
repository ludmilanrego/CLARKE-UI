import './styles.css';

import Triangle from '../../assets/Triangle.svg'
import { useState } from 'react'
import TableRow from '../TableRow';

import NavRight from '../../assets/navigate_right.png';
import NavLeft from '../../assets/navigate_left.png';

import { useContext } from 'react';
import UserContext from '../../contexts/UserContext';

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


    function toogleSortOfList(sortedColumn) {
        const resetSort = {
            name: false,
            origin_state: false,
            cost_per: false,
            total_costumers: false,
            costumers_score: false
        }

        setSortList({ ...resetSort, [sortedColumn]: !sortList.sortedColumn })
        let localSupplierList = supplierList
        if (sortList.sortedColumn) {
            localSupplierList.sort((a, b) => {
                if (a.sortedColumn.toLowerCase() > b.sortedColumn.toLowerCase()) {
                    return 1;
                }
                if (a.sortedColumn.toLowerCase() < b.sortedColumn.toLowerCase()) {
                    return -1;
                }
                return 0;;
            });

            setSupplierList(localSupplierList)
        }
        if (!sortList.sortedColumn) {
            localSupplierList.sort((a, b) => {
                if (a.sortedColumn.toLowerCase() > b.sortedColumn.toLowerCase()) {
                    return -1;
                }
                if (a.sortedColumn.toLowerCase() < b.sortedColumn.toLowerCase()) {
                    return 1;
                }
                return 0;;
            });

            setSupplierList(localSupplierList)
        }
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
                        onClick={() => toogleSortOfList("name")}
                    />
                </div>

                <div className='table-row-section origin-state'>
                    <span className='description'>Estado de Origem</span>
                    <img
                        className="triangle-img"
                        src={Triangle}
                        alt="ordenar-lista"
                        onClick={() => toogleSortOfList("origin_state")}
                    />
                </div>

                <div className='table-row-section cost-per-kwh'>
                    <span className='description'>Custo/kWh</span>
                </div>

                <div className='table-row-section total-clients'>
                    <span className='description'>Número Total de Clientes</span>
                </div>

                <div className='table-row-section score'>
                    <span className='description'>Avaliação de Clientes</span>
                </div>
                {/* <div className='table-row-section icons'></div> */}
            </div>
            {
                ajustPage(supplierList).map((supplier) => (
                    // supplierList.map((supplier) => (
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