import './styles.css';
import { useState } from 'react'
import { dayOfWeekInPortuguese, formatToModelDate } from '../../utils/dateFormat'

import EditIcon from '../../assets/Edit-icon.svg'
import TrashIcon from '../../assets/Trash-Icon.svg'

import PopUp from '../PopUp'

import { useContext } from 'react';
import UserContext from '../../contexts/UserContext';

export default function TableRow({ supplier }) {

    // const { setModal } = useContext(UserContext)
    // const [showPopUp, setShowPopUp] = useState(false)

    // function activateShowPopUp(event) {
    //     event.preventDefault();
    //     event.stopPropagation();

    //     setShowPopUp(true)
    // }

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
                <span className='description'>{supplier.cost_per_kwh}</span>
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
