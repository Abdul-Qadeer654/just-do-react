import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    date: new Date("2023.5.17"),
    title: "BMW",
    price: 360000,
  },
  {
    id: "e2",
    date: new Date("2018.7.25"),
    title: "frari",
    price: 600000,
  },
  {
    id: "e3",
    date: new Date("2022.6.19"),
    title: "wagon",
    price: 460000,
  },
  {
    id: "e4",
    date: new Date("2021.7.15"),
    title: "honda",
    price: 560000,
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};
export default App;
