import React, { useState } from "react";
import ItemDate from "./ItemDate/ItemDate";
import "./ExpenceItem.css";

function ExpencesItem(props) {
  const dt = new Date();
  // console.log(dt)
  let [title, setTitle] = useState(props.particulars);
  console.log(props.part);
  let [newTitle, setNewTitle] = useState("");

  // defining click event
  const clickHandler = () => {
    setTitle(newTitle);
  };
  const changeController = (event) => {
    setNewTitle(event.target.value);
  };

  return (
    <div>
      <div className="exItem">
        <ItemDate  date = {dt}/>
        <div>{props.date} </div>
        <span>{title}</span>
        <span className="item-price">{props.cost}</span>
        <span>
          <input type="text" value={newTitle} onChange={changeController} />
        </span>
        <span>
          <button onClick={clickHandler}>change title</button>
        </span>
      </div>
    </div>
  );
}

export default ExpencesItem;
