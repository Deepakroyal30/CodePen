import React, { useContext } from 'react'
import BudgetContext from './BudgetContext'
import './ExpenseCard.css'

const ExpenseCard = ({name, cost, id}) => {

    const {setExpenses,setTotalSpend} = useContext(BudgetContext)

    function deleteHandler(id){

        setTotalSpend((prevState)=>{
            return prevState - cost;
        })

        setExpenses((prevState)=>{
            const data = [...prevState];
            data.splice(id,1);
            return data;
        })
    }

  return (
    <div className='card_container'>
        <p>{name}</p>
        <p>Rs:{cost}</p>
        <button onClick={()=>{
            deleteHandler(id);
        }}>Delete</button>
    </div>
  )
}

export default ExpenseCard