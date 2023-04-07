import './styles.css';
import { useState } from 'react'
import api from '../../services/api';

import { useContext } from 'react';
import UserContext from '../../contexts/UserContext';

export default function FormContainer() {

    const { setEnergyConsumption, setSupplierList } = useContext(UserContext)

    const [userForm, setUserForm] = useState(
        {
            energyConsumptionValue: ""
        }
    );

    async function requestSupplierList(value) {

        try {
            const { data } = await api.post('/suppliers/minkwh', {
                energyConsumption: value
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            setSupplierList(data)
            return
        } catch (error) {
            console.log(error)
        }
    }

    async function handleSubmit(event) {
        event.preventDefault();
        event.stopPropagation();

        if (!userForm.energyConsumptionValue) {
            return;
        }

        setEnergyConsumption({
            definedStatus: true,
            value: userForm.energyConsumptionValue
        })

        requestSupplierList(userForm.energyConsumptionValue)
    }

    function handleForm(event) {
        event.preventDefault();
        event.stopPropagation();
        setUserForm({ ...userForm, [event.target.name]: event.target.value })
    }

    return (
        <>
            <div className="form-img" />
            <div className="form-container">
                <form className='user-form'
                    onSubmit={(event) => handleSubmit(event)}
                >
                    <div className='input-container' >
                        <label htmlFor='energyConsumptionValue'>Consumo Mensal de Energia - kWh</label>
                        <input
                            type='text'
                            name='energyConsumptionValue'
                            value={userForm.energyConsumptionValue}
                            onChange={(event) => handleForm(event)}
                        />
                    </div>
                    <button
                        className='form-confirm-button'
                        type='submit'
                    >Confirmar</button>
                </form>
            </div>
        </>
    )
}