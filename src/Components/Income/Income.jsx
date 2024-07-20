import React from 'react';
import '../../styles/Layouts.css';
import './income.css';
import Form from '../Form/Form';
import IncomeItem from '../IncomeItem/IncomeItem';
import dummydata from './dummydata.json';

function Incomes(){
    // const {addIncome,incomes, getIncomes, deleteIncome, totalIncome} = useGlobalContext()
    return(
            <div className='IncomeStyled'>
                <div className='innerLayout'>
                    <h1>Incomes</h1>
                    <div className='income-content'>
                        <div className='form-container'>
                            <Form />
                        </div>
                        <div className='incomes'>
                            {dummydata.map((income)=>{
                                const{_id, title, amount, date, category, description} = income;
                                return<IncomeItem 
                                key={_id}
                                id={_id}
                                title={title}
                                description={description}
                                amount={amount} date={date}
                                category={category}
                                indicatorColor="var(--color-green)"
                                // deleteItem={deleteIncome}
                                />
                            })}
                        </div>
                    </div>
                </div>

            </div>
    )
}

export default Incomes;
