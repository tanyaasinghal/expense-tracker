import React, { useState, useContext } from 'react';
import axios from'axios';

const GlobalContext = React.createContext();

const BaseUrl = 'http://127.0.0.1:3000'

export const GlobalProvider = ({children}) =>{
    const [incomes, setIncomes]= useState([])
    const [expenses, setExpenses]= useState([])
    const [error, setError]= useState(null)

    const addIncome = async(income) =>{
        const response= await axios.post(`${BaseUrl}/income/addIncome`, income)
        .then((res)=>{
            console.log(res.data);
        })
        .catch((error)=>{
            setError(error)
        });
        getIncomes();
    }

    const getIncomes = async()=>{
        const response = await axios.get(`${BaseUrl}/income/getAllIncomes`)
        .then((res)=>{
            setIncomes(res.data)
        })
        .catch((error)=>{
            setError(error)
        });
    }

    const deleteIncome = async(id)=>{
        const response = await axios.delete(`${BaseUrl}/income/deleteIncome/${id}`)
        .then((res)=>{
            console.log(res.data)
        })
        .catch((error)=>{
            setError(error)
        });
        getIncomes();   
    }

    const totalIncome=()=>{
        let totalIncome=0;
        incomes.forEach((income)=>{
            totalIncome+=income.amount
        })
        return totalIncome;
    }
    console.log(totalIncome());
    const addExpense = async(expense) =>{
        const response= await axios.post(`${BaseUrl}/expense/addExpense`, expense)
        .then((res)=>{
            console.log(res.data);
        })
        .catch((error)=>{
            setError(error)
        });
        getExpenses();
    }

    const getExpenses = async()=>{
        const response = await axios.get(`${BaseUrl}/expense/getAllExpenses`)
        .then((res)=>{
            setExpenses(res.data)
        })
        .catch((error)=>{
            setError(error)
        });
    }

        const deleteExpense = async(id)=>{
            const response = await axios.delete(`${BaseUrl}/expense/deleteExpense/${id}`)
            .then((res)=>{
                console.log(res.data)
            })
            .catch((error)=>{
                setError(error)
            });
            getExpenses();   
        }

        const totalExpense=()=>{
            let totalExpense=0;
            expenses.forEach((expense)=>{
                totalExpense+=expense.amount
            })
            return totalExpense;
        }
    return(
        <GlobalContext.Provider value={
            {
                incomes,
                addIncome,
                getIncomes,
                deleteIncome,
                totalIncome,
                expenses,
                addExpense,
                getExpenses,
                deleteExpense,
                totalExpense,
                error,
                setError,
            }}>
            {children}
        </GlobalContext.Provider>
    )
}
export const useGlobalContext = () =>{
    return useContext(GlobalContext)
}