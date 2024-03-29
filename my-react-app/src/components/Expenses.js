import React, { useContext } from 'react'
import BudgetContext from './BudgetContext'
import ExpenseCard from './ExpenseCard';
import './Expenses.css'

const Expenses = () => {
    
    const {expenses,setExpenses} = useContext(BudgetContext);
  return (
    <div id='expense_container'>
        <h2>Expenses</h2>
        <div>
            {expenses.length === 0 && <p>Add Data To List . . . . .</p>}
            {
                expenses.map((elem, index)=>{
                    return(
                        <ExpenseCard key={index} name = {elem.name} cost = {elem.cost} id = {index} />
                    )
                })
            }
        </div>
    </div>
  )
}

export default Expenses