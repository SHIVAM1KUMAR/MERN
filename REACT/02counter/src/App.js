import { useState } from "react";

function App() {

let [counter,setCounter]=useState(15)


  //let counter =15
  const addValue = () =>{
    // console.log("value added", Math.random());
    console.log("SHIVAM KUMAR");
     console.log("clicked",counter);
     counter=counter+1
     setCounter(counter)
  }
const RemoveVaue =() =>{
  counter=counter-1
  setCounter(counter)
}

  return (
    <>
    <h1>React  Move forwar to ..</h1>
    <h2>Counter valve :{counter}</h2>
    <button onClick={addValue}>Add Value{counter}</button>
    <br />
    <button onClick={RemoveVaue}>Remove Values{counter}</button>
    <p>footer{counter}</p>
    </>
  );
}

export default App;
