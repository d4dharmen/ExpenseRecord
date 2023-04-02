import React, { useState } from "react";
import "./App.css";
import ExpencesItem from "./components/ExpenceItem";
import Forms from "./components/forms/Forms";

const dummyData = [
  {
    part: "car expences",
    cost: "300",
    date: new Date().toString,
    id: Math.random().toString(),
  },
  {
    part: "car expences",
    cost: "1000",
    date: new Date().toString,
    id: Math.random().toString(),
  },
];
function App() {
  //retrived data from form fields
  const [finalData, setFinalData] = useState(dummyData);
  const funcToForm = (dataFrmForm) => {
    const dataWithId = {
      ...dataFrmForm,
      //added id property in retrieved data.
      id: Math.random().toString(),
      
    };
    setFinalData(dataWithId);
    console.log(dataWithId);
    // const updatedData = [dataWithId, ...dummyData]
  };
  console.log(finalData);

  // returning or calling htms items in form of jsx
  return (
    <div className="App">
      <div>
        <Forms funcFromApp={funcToForm} />
      </div>
{
  finalData.map(item => (

    <ExpencesItem particulars={item.part} cost={item.cost} date={item.date} />
  ))
}
    </div>
  );
}

export default App;
