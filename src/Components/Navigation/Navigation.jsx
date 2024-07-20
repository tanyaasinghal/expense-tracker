import React, {useState} from 'react';
import './navigation.css';
import avatar from '../../img/avatar.png';
import {dashboard, expenses, transactions, trend, signout} from '../../utils/Icons';

const menuItems=[
    {
        id: 1,
        title: "Dashboard",
        icon: dashboard,
        link:'/dashboard',

    },
    {
        id: 2,
        title: "View Transactions",
        icon: transactions,
        link:'/dashboard',
    },
    {
        id: 3,
        title: "Incomes",
        icon: trend,
        link:'/dashboard',
    },
    {
        id: 4,
        title: "Expenses",
        icon: expenses,
        link:'/dashboard',
    }
]

function Navigation({active, setActive}){
    return(
        <div>
            <div className="NavStyled">
                <div className="user-con">
                    <img src={avatar} alt=""></img>
                    <div className="text">
                        <h2>Emily</h2>
                        <p>Your Money</p>
                    </div>
                </div>
                <ul className="menu-items">
                    {menuItems.map((item)=>{
                        return <li
                        key={item.id}
                        onClick={()=> setActive(item.id)}
                        className={active === item.id ? 'active' : ''}
                        >
                            {item.icon}
                            <span>{item.title}</span>
                        </li>
                    })}
                </ul>
                <div className="bottom-nav">
                    <li>
                        {signout} Sign Out
                    </li>
                </div>
            </div>

        </div>
    )
}

export default Navigation;