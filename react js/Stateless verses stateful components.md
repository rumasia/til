
## Stateful components
A react app is basically made up of many components.Those components which are responsible for managing the state are called stateful componenets
## Stateless components 
Those components which are not responsible for managing the state are called stateful componenets.It is only thers to present data.
```
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import '../UI/card.css'
import Card from '../UI/Card'
import React from 'react'
const ExpenseItem=(props)=>{
 
return (
<Card className='expense-item'>
<ExpenseDate date={props.date}></ExpenseDate>
<div className='expense-item__description'>
<h2>{props.title}</h2>
<div className='expense-item__price'>{props.amount}</div>
</div>
</Card>
    )
}
export default ExpenseItem;
```
