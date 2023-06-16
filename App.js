import React, {useState} from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from "./components/Expenses/Expenses";
// import logo from './logo.svg';
import './App.css';

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Books", 
    amount: 298.01, 
    date: new Date(2021, 3, 16)
  },
  {
    id: "e2",
    title: "Installments", 
    amount: 500, 
    date: new Date(2021, 4, 20)
  },
  {
    id: "e3",
    title: "Shopping", 
    amount: 1000, 
    date: new Date(2022, 5,  16)
  },
  {
    id: "e4",
    title: "Travel", 
    amount: 250, 
    date: new Date(2022, 9, 27)
  },
];

const  App = () => {
 const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return[expense, ...expenses];
    });
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h1', {}, "lets get started!"),
  //   React.createElement(Expenses, { items : expenses})
  // );

  return (
     <div>
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses items={expenses}/>
      </div>
    
  );

 

}
export default App;
