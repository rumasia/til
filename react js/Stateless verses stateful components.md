
## Stateful/Smart components
A react app is basically made up of many components.Those components which are responsible for managing the state are called stateful componenets.Like
```
import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [entertitle, setTitle] = useState("");
  const changeTitleHandler = (event) => {
    setTitle(event.target.value);
  };
```

## Stateless/Presentational/Dumb components
Those components which are not responsible for managing the state are called stateless componenets.It is only thers to present data.
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
