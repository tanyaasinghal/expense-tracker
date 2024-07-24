import React, {useEffect} from 'react';
import '../../styles/Layouts.css';
import './expenses.css';
import ExpenseForm from './ExpenseForm';
import IncomeItem from '../IncomeItem/IncomeItem';
import { useGlobalContext } from '../../context/globalContext';

function Expenses(){
    const {addExpense, expenses, getExpenses, deleteExpense, totalExpense} = useGlobalContext();

    useEffect(()=>{
        getExpenses();
    },[])

    return(
            <div className='ExpenseStyled'>
                <div className='innerLayout'>
                    <h1>Expenses</h1>
                    <h2 className="total-expense">Total Expense: <span>₹{totalExpense()}</span></h2>
                    <div className='expense-content'>
                        <div className='form-container'>
                            <ExpenseForm />
                        </div>
                        <div className='expenses'>
                            {expenses.map((expense)=>{
                                const{_id, title, amount, date, category, description} = expense;
                                return<IncomeItem 
                                key={_id}
                                id={_id}
                                title={title}
                                description={description}
                                amount={amount} date={date}
                                category={category}
                                indicatorColor="var(--color-green)"
                                deleteItem={deleteExpense}
                                />
                            })}
                        </div>
                    </div>
                </div>

            </div>
    )
}

export default Expenses;
