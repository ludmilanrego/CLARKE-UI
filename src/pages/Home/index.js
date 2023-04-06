import Header from '../../components/Header';
// import ResumeBox from '../../components/ResumeBox';

import TableContainer from '../../components/TableContainer';

// import AddTransactionButton from '../../components/AddTransactionButton';
// import ResumeButton from '../../components/ResumeButton';
import FormContainer from '../../components/FormContainer';


import api from './../../services/api';
import { useState, useEffect } from 'react'
import { getItem } from './../../utils/storage'

import './styles.css'

import UserContext from '../../contexts/UserContext';

function Home() {

    const [energyConsumption, setEnergyConsumption] = useState({ definedStatus: false })
    const [supplierList, setSupplierList] = useState([])

    return (

        <UserContext.Provider value={{
            energyConsumption, setEnergyConsumption, supplierList, setSupplierList
        }}>

            <div className='home-container'>
                <Header></Header>
                <main>
                    {!energyConsumption.definedStatus && <FormContainer></FormContainer>}
                    {energyConsumption.definedStatus && <TableContainer></TableContainer>}
                </main >
            </div >
        </UserContext.Provider>
    );
}
export default Home;


