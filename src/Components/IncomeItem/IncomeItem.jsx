import React from "react";
import './income_item.css';
import { bitcoin, book, calender, card, circle, clothing, comment, food, freelance, medical, money, piggy, rupee, stocks, takeaway, trash, tv, users, yt } from "../../utils/Icons";
import Button from "../Button/Button";

function IncomeItem({
    id,
    title,
    amount,
    date,
    category,
    description,
    deleteItem,
    indicatorColor,
    type
}){
    const categoryIcon = ()=> {
        switch(category) {
            case 'salary':
                return money;
            case 'freelancing':
                return freelance;
            case 'investments':
                return  stocks;
            case 'stocks':
                return users;
            case 'bitcoin':
                return bitcoin;
            case 'bank':
                return card;
            case 'youtube':
                return yt;
            case 'other':
                return piggy;
            default: 
                return ''
        }
    }

    const expenseCatIcon = ()=>{
        switch (category) {
            case 'education':
                return book;
                case 'groceries':
                    return food;
                case 'health':
                    return medical;
                case 'subscriptions':
                    return tv;
                case 'takeaways':
                    return takeaway;
                case 'clothing':
                    return clothing;
                case 'travelling':
                    return freelance;
                case 'other':
                    return circle;
                default:
                    return '';
        }
    }




    return(
        <div className="IncomeItemStyled" style ={{'--indicator-color':indicatorColor}} >
            <div className="icon">
                {type === 'expense' ? expenseCatIcon() : categoryIcon()}
            </div>
            <div className="content">
                <h5>{title}</h5>
                <div className="inner-content">
                    <div className="text">
                        <p>{rupee} {amount}</p>
                        <p>{calender} {date}</p>
                        <p>
                            {comment}
                            {description}
                        </p>
                    </div>
                    <div className="btn-con">
                        <Button 
                            icon={trash}
                            bPad={'1rem'}
                            bRad={'50%'}
                            bg={'var(--primary-color)'}
                            color={'#fff'}
                            iColor={'#fff'}
                            hColor={'var(--color-green)'}
                            onClick={()=> deleteItem(id)}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IncomeItem;