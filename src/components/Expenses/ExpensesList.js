import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  /*   let expensesContent = <p>No expenses found.</p>; */
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }
  //ako nemamo items, vraćamo skroz drugi JSX
  //ovo koristimo kada se cijeli JSX kontent mijenja, uvijek možemo ddati if check gdje returnamo drugačiji JSX blok ako se neki uvjet javlja

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
