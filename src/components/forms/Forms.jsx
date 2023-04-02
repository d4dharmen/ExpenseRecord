import { useState } from "react";
import "./forms.css";

const Forms = (props) => { 
  // defining variables for all three fieds for add expenses form
  const [title, setTitle] = useState("");
  const [cost, setCost] = useState("");
  const [date, setDate] = useState("");

  // retriving data from form fields and assgining value to variables
  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const costChangeHandler = (event) => {
    setCost(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };
  //creating object from values retrieved.
  const submitHandler = () => {
    const newExpenseformData = {
      particulars: { title },
      cost: { cost },
      date: { date },
    };
    
    //assigning data to function parameter
    props.funcFromApp(newExpenseformData)
  };
  
  return (
    <div className="container">
      <h3> Add your expenses here</h3>
      <div className="forms">
        <form action="#" onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="item for which expenced"
            onChange={titleChangeHandler}
          />
          <input
            type="number"
            name=""
            id=""
            placeholder="amount"
            onChange={costChangeHandler}
          />
          <input
            type="date"
            name=""
            id=""
            defaultValue={new Date().toString}
            onChange={dateChangeHandler}
          />
          <input type="submit" value="Add Expenses" />
        </form>
      </div>
    </div>
  );
};
export default Forms;
