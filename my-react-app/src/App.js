import logo from './logo.svg';
import './App.css';
import LandingScreen from './screens/LandingScreen';
import { createContext, useState } from 'react';
import BudgetContext from './components/BudgetContext';

function App() {
  const totalBudget = 2000;
  const [totalSpend, setTotalSpend] = useState(0);
  const [expenses, setExpenses] = useState([]);

  return (
    <BudgetContext.Provider value={{totalBudget,totalSpend,setTotalSpend, expenses,setExpenses}}>
      <LandingScreen/>
    </BudgetContext.Provider>
  );
}

export default App;