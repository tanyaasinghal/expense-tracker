import React, { useState } from 'react';
const GlobalContext = React.createContext()

export const GlobalProvider = ({children}) =>{
    const [incomes, setIncomes]= useState([])
    const [expenses, setExpenses]= useState([])
    const [error, setError]= useState(null)

    // const addIncome = async(income) =>{
    //     const response = await

    // }
    return(
        <GlobalContext.Provider>
            {children}
        </GlobalContext.Provider>
    )
}