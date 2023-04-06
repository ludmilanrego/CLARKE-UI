import './styles.css';

import Triangle from '../../assets/Triangle.svg'
import { useState } from 'react'
import Table from '../Table';

import NavRight from '../../assets/navigate_right.png';
import NavLeft from '../../assets/navigate_left.png';

import { useContext } from 'react';
import UserContext from '../../contexts/UserContext';

import Filter from '../../components/Filter';
import FilterBox from '../../components/FilterBox';

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