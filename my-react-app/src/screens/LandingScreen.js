import React from 'react'
import BudgetDetails from '../components/BudgetDetails'
import Expenses from '../components/Expenses'
import AddExpenses from '../components/AddExpenses'
import './LandingScreen.css'

const LandingScreen = () => {
  return (
    <div id='container'>
        <h1>My Budget Planner</h1>
        <BudgetDetails/>
        <Expenses/>
        <AddExpenses/>
    </div>
  )
}

export default LandingScreen