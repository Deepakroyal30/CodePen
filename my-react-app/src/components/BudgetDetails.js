import React, { useContext } from 'react'
import BudgetContext from './BudgetContext'
import './BudgetDetails.css'

const BudgetDetails = () => {

    const {totalBudget,totalSpend} = useContext(BudgetContext)
    console.log(totalBudget,totalSpend)
  return (
    <div id='budget_container'>
        <div>
            <p>Budget: Rs.{totalBudget}</p>
        </div>
        <div>
            <p>Remaining: Rs.{totalBudget - totalSpend}</p>
        </div>
        <div>
            <p>Spent: Rs.{totalSpend}</p>
        </div>
    </div>
  )
}

export default BudgetDetails