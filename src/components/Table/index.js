import './styles.css';

import Triangle from '../../assets/Triangle.svg'
import { useState } from 'react'
import TableRow from '../TableRow';

import NavRight from '../../assets/navigate_right.png';
import NavLeft from '../../assets/navigate_left.png';

import { useContext } from 'react';
import UserContext from '../../contexts/UserContext';

export default function Table() {

    const { supplierList } = useContext(UserContext)

    // const [sortUpOn, setSortUpOn] = useState(true)

    // const [page, setPage] = useState(1)
    // const maxNumberPerPage = 5


    // function toogleSortOfList() {

    //     setSortUpOn(!sortUpOn)

    //     if (sortUpOn) {
    //         let localFilteredTransactions = filteredTransactions

    //         localFilteredTransactions.sort((a, b) => {
    //             return (+(new Date(a.data))) - (+ (new Date(b.data)));
    //         });

    //         setFilteredTransactions(localFilteredTransactions)
    //     }
    //     if (!sortUpOn) {
    //         let localFilteredTransactions = filteredTransactions

    //         localFilteredTransactions.sort((a, b) => {
    //             return (+(new Date(b.data))) - (+ (new Date(a.data)));
    //         });

    //         setFilteredTransactions(localFilteredTransactions)
    //     }
    // }

    // function ajustPage(list) {

    //     const itemsCountEnd = (maxNumberPerPage * page);
    //     const itemsCountStart = maxNumberPerPage * (page - 1);

    //     return list.slice(itemsCountStart, itemsCountEnd)
    // }

    // function decreasePage(event) {
    //     event.preventDefault();
    //     event.stopPropagation();

    //     if (page === 1) {
    //         return
    //     }

    //     const decreasedPage = page - 1
    //     setPage(decreasedPage)
    // }

    // function increasePage(event, list) {
    //     event.preventDefault();
    //     event.stopPropagation();

    //     if (((page * maxNumberPerPage)) > list.length) {
    //         return
    //     }

    //     const increasedPage = page + 1
    //     setPage(increasedPage)
    // }

    // const supplierList = [
    //     {
    //         id: 0,
    //         name: "teste1",
    //         img: "imagem",
    //         origin_state: "Bahia",
    //         cost_per_kwh: 10,
    //         min_kwh: 10,
    //         total_costumers: 100,
    //         costumers_score: 4
    //     },
    //     {
    //         id: 1,
    //         name: "teste1",
    //         img: "imagem",
    //         origin_state: "Bahia",
    //         cost_per_kwh: 10,
    //         min_kwh: 10,
    //         total_costumers: 105,
    //         costumers_score: 5
    //     },
    //     {
    //         id: 2,
    //         name: "teste1",
    //         img: "imagem",
    //         origin_state: "Bahia",
    //         cost_per_kwh: 10,
    //         min_kwh: 10,
    //         total_costumers: 12,
    //         costumers_score: 3
    //     },
    //     {
    //         id: 3,
    //         name: "teste1",
    //         img: "imagem",
    //         origin_state: "Bahia",
    //         cost_per_kwh: 10,
    //         min_kwh: 10,
    //         total_costumers: 10,
    //         costumers_score: 5
    //     }
    // ]

    return (
        <div className='table'>
            <div className='table-header'>
                <div className='table-row-section table-row-logo'>
                    {/* <img
                        className="triangle-img"
                        src={Triangle}
                        alt="ordenar-lista"
                        onClick={() => toogleSortOfList()}
                    ></img> */}
                </div>

                <div className='table-row-section name'>
                    <span className='description'> Fornecedor </span>
                    <img
                        className="triangle-img"
                        src={Triangle}
                        alt="ordenar-lista"
                    // onClick={() => toogleSortOfList()}
                    ></img>
                </div>

                <div className='table-row-section origin-state'>
                    <span className='description'>Estado de Origem</span>
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
                // ajustPage(supplierList).map((supplier) => (
                supplierList.map((supplier) => (
                    <TableRow
                        key={supplier.id}
                        supplier={supplier}
                    ></TableRow>
                ))
            }
            <div className='table-footer'>
                <img
                    className="exit-img"
                    src={NavLeft}
                    alt="retomar-pagina"
                // onClick={(event) => decreasePage(event, filteredTransactions)}
                ></img>
                <img
                    className="exit-img"
                    src={NavRight}
                    alt="avançar-pagina"
                // onClick={(event) => increasePage(event, filteredTransactions)}
                ></img>
            </div>
        </div>
    )
}