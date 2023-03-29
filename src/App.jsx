import { useState } from "react";
import "./App.css";
import ExpencesItem from "./components/ExpenceItem";
import Forms from "./components/forms/Forms";


function App() {
  // defining variable
  const part0 = "car expenses";
  const cst0 = "$ 3000";
  

  const part1 = "household";
  const cst1 = "$ 20000";
  

  const part2 = "education";
  const cst2 = "$ 10000";
  
// returning or calling htms items in form of jsx
  return (
    <div className="App">
      <div>
        <Forms/>
      </div>
      <ExpencesItem   particulars={ part0 } cost={ cst0 } />
      <ExpencesItem   particulars={ part1 } cost={ cst1 } />
      <ExpencesItem   particulars={ part2 } cost={ cst2 } />
    </div>
  );
}

export default App;
