import React from 'react';
import './css/App.css';
import IncomeExpenseList from './components/IncomeExpenseList';
import ExpenseForm from './components/ExpenseForm';

function App() {

  const getCurrentDate = () => {
      const today = new Date();
      const date = today.getDate();
      const month = today.getMonth() + 1;
      const year = today.getFullYear();
      return `${date}/${month}/${year}`;
  }
  
  const innitData = [
    {id:1, date: getCurrentDate(),title:"ເຄື່ອງໃຊ້ສ່ວນຕົວ", amount:200000},
    {id:2, date: getCurrentDate(),title:"ນໍ້າມັນລົດ", amount:340000},
    {id:3, date: getCurrentDate(),title:"ຄ່າຫ້ອງ", amount:1000000},
  ]

  return (
    <section className='container'>
      <ExpenseForm/>
      <br></br>
      <hr></hr>
      <br></br>
      <IncomeExpenseList items = {innitData}/>
    </section>
  );
}

export default App;
