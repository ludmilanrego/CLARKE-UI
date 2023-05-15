import Header from '../../components/Header';
import TableContainer from '../../components/TableContainer';
import FormContainer from '../../components/FormContainer';

import { useState } from 'react'

import './styles.css'

import UserContext from '../../contexts/UserContext';

function Home() {

    interface EnergyConsumption {
        definedStatus: Boolean;
        value?: Number;
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

    const [energyConsumption, setEnergyConsumption] = useState<EnergyConsumption>({ definedStatus: false })
    const [supplierList, setSupplierList] = useState<SupplierList[]>([])

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


