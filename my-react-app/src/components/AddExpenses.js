import React, { useContext, useRef } from 'react'
import BudgetContext from './BudgetContext'
import './AddExpenses.css'

const AddExpenses = () => {

    const {setExpenses,setTotalSpend} = useContext(BudgetContext);

    const nameRef = useRef();
    const costRef = useRef();

    function saveHandler(){
        const name = nameRef.current.value;
        const cost = parseInt(costRef.current.value);

        setExpenses((prevState)=>{
            const data = [...prevState,{name: name, cost : cost}]
            return data
        });

        setTotalSpend((prevState) =>{
            return prevState + cost;
        })

        nameRef.current.value = "";
        costRef.current.value = "";
    }

  return (
    <div id='add_expense_container'>
        <h2>Add Expenses</h2>
        <div>
            <input ref={nameRef} type='text' placeholder='input name'/>
            <input ref={costRef} type='number' placeholder='input cost'/>
        </div>
        <button onClick={saveHandler}>Save</button>
    </div>
  )
}

export default AddExpenses