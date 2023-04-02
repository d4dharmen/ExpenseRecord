import React, { useState } from "react";
import ItemDate from "./ItemDate/ItemDate";
import "./ExpenceItem.css";

function ExpencesItem(props) {
  const dt = new Date();

  return (
    <div>
      <div className="exItem">
        <ItemDate  date = {dt}/>
        <div>{props.date} </div>
        <span>{props.particulars}</span>
        <span className="item-price">$ {props.cost}</span>
      </div>
    </div>
  );
}

export default ExpencesItem;
