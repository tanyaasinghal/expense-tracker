import React, { useEffect } from 'react';
import './dashboard.css';
import '../../styles/Layouts.css';
import { useGlobalContext } from '../../context/globalContext';



function Dashboard() {
    const { getIncomes } = useGlobalContext();

    useEffect(() => {
        getIncomes();
    }, [])
    return (
        <div className='DashboardStyled'>
            <div className='innerLayout'>

            </div>

        </div>
    )
}

export default Dashboard;
