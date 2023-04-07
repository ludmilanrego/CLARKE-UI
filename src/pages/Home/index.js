import Header from '../../components/Header';
import TableContainer from '../../components/TableContainer';
import FormContainer from '../../components/FormContainer';

import { useState } from 'react'

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


