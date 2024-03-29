import './styles.css';
import ArrowDown from '../../assets/down-arrow.svg'
import ArrowUp from '../../assets/arrow-up.svg'
import ArrowLeft from '../../assets/left-chevron.svg'
import ArrowRight from '../../assets/right-arrow.svg'

import TableRow from '../TableRow';
import UserContext from '../../contexts/UserContext';
import { useState, useContext } from 'react'
import { sortListByColumn } from '../../utils/sort'

export default function Table() {

    interface SortList {
        name: Boolean;
        origin_state: Boolean;
        cost_per_kwh: Boolean;
        total_customers: Boolean;
        customers_score: Boolean;
    }

    interface SupplierList {
        id: number;
        name: string;
        img: string;
        origin_state: string;
        cost_per_kwh: number;
        min_kwh: number;
        total_customers: number;
        costumers_score: number;
    }

    const { supplierList, setSupplierList } = useContext(UserContext)
    const [sortList, setSortList] = useState<SortList>(
        {
            name: false,
            origin_state: false,
            cost_per_kwh: false,
            total_customers: false,
            customers_score: false
        })

    const [page, setPage] = useState<number>(1)
    const maxNumberPerPage: number = 5

    function ajustPage(list: SupplierList[]): SupplierList[] {
        const itemsCountEnd: number = (maxNumberPerPage * page);
        const itemsCountStart: number = maxNumberPerPage * (page - 1);

        return list.slice(itemsCountStart, itemsCountEnd)
    }

    function decreasePage(event): void {
        event.preventDefault();
        event.stopPropagation();

        if (page === 1) {
            return
        }

        const decreasedPage: number = page - 1
        setPage(decreasedPage)
    }

    function increasePage(event, list: SupplierList[]): void {
        event.preventDefault();
        event.stopPropagation();

        if (((page * maxNumberPerPage)) >= list.length) {
            return
        }

        const increasedPage: number = page + 1
        setPage(increasedPage)
    }

    return (
        <div className='table'>
            <div className='table-header'>
                <div className='table-row-section table-row-logo'></div>
                <div className='table-row-section name'>
                    <img
                        className="arrow-img"
                        src={sortList.name ? ArrowDown : ArrowUp}
                        alt="ordenar-lista"
                        onClick={() => sortListByColumn("name", sortList, setSortList, supplierList, setSupplierList)}
                    />
                    <span className='description'> Fornecedor </span>
                </div>

                <div className='table-row-section origin-state'>
                    <img
                        className="arrow-img"
                        src={sortList.origin_state ? ArrowDown : ArrowUp}
                        alt="ordenar-lista"
                        onClick={() => sortListByColumn("origin_state", sortList, setSortList, supplierList, setSupplierList)}
                    />
                    <span className='description'>Estado</span>
                </div>

                <div className='table-row-section cost-per-kwh'>
                    <img
                        className="arrow-img"
                        src={sortList.cost_per_kwh ? ArrowDown : ArrowUp}
                        alt="ordenar-lista"
                        onClick={() => sortListByColumn("cost_per_kwh", sortList, setSortList, supplierList, setSupplierList)}
                    />
                    <span className='description'>Custo/kWh</span>
                </div>

                <div className='table-row-section total-clients'>
                    <img
                        className="arrow-img"
                        src={sortList.total_customers ? ArrowDown : ArrowUp}
                        alt="ordenar-lista"
                        onClick={() => sortListByColumn("total_customers", sortList, setSortList, supplierList, setSupplierList)}
                    />
                    <span className='description'>Clientes</span>
                </div>

                <div className='table-row-section score'>
                    <img
                        className="arrow-img"
                        src={sortList.customers_score ? ArrowDown : ArrowUp}
                        alt="ordenar-lista"
                        onClick={() => sortListByColumn("customers_score", sortList, setSortList, supplierList, setSupplierList)}
                    />
                    <span className='description'>Avaliação</span>
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
                    src={ArrowLeft}
                    alt="retomar-pagina"
                    onClick={(event) => decreasePage(event)}
                />
                <img
                    className="page-nav-img"
                    src={ArrowRight}
                    alt="avançar-pagina"
                    onClick={(event) => increasePage(event, supplierList)}
                />
            </div>
        </div>
    )
}