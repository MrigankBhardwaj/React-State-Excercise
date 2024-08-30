import React, { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";


function SimpleCounter() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [submitValue, setSubmitValue] = useState("");
  const [inputType, setInputType] = useState("password");
  const [passwordState, setPasswordState] = useState(false);
  const incrementFunction = () => {
    setCount(count + 1);
  }
  const decrementFunction = () => {
    setCount(count - 1);
  }
  const resetFunction = () => {
    setCount(0);
  }
  const handleChange = (event) => {
    setInputValue(event.target.value);
  }
  const refreshFunction = () => {
    setInputValue("");
    setSubmitValue("");
  }
  const submitFunction = (event) => {
    event.preventDefault();
    setSubmitValue(inputValue);
  }
  const toggleElement = () => {
    setPasswordState(!passwordState);
    passwordState === false ? setInputType("text") : setInputType("password");
  }
  return (
    <div className='container my-5'>
      <button type="button" className="btn btn-success mx-2" onClick={incrementFunction}>Increment!</button>
      <button type="button" className="btn btn-warning mx-2" onClick={decrementFunction}>Decrement!</button>
      <button type="button" className="btn btn-danger mx-2" onClick={resetFunction}>Reset</button>
      <div className='my-5 mx-3'>
        <p>Current Count : {count}</p>
      </div>
      {/* Controlled Input -  Means Whatever I type in the Input field it respectively shows on the screen */}
      <h2>Controlled Input</h2>
      <p>Means Whatever I type in the Input field it respectively shows on the screen</p>
      <input type="text" value={inputValue} placeholder="Type Something..." onChange={handleChange} />
      <button type="button" className="btn btn-danger mx-3" onClick={refreshFunction}>Refresh</button>
      <p>Input Value : <strong>{inputValue}</strong></p>
      {/* COntrolled Form - freeCodeCamp Exercise */}
      <div className="controlled-form">
        <h2>Controlled Form</h2>
        <p>The input onChange function is same as Controlled Input.</p>
        <form onSubmit={submitFunction}>
          <input type="text" value={inputValue} onChange={handleChange} />
          {/* Use State to Toggle an Element - freeCodeCamp Exercise */}
          <h2>Use State to Toggle an Element</h2>
          <p>In this password input type we uses the state to show and hide the password by clicking on the icon.</p>
          <input type={inputType} placeholder="Enter Password..." name="password" autoComplete="on"/> {passwordState === true ? <IoMdEyeOff onClick={toggleElement} /> : <IoMdEye onClick={toggleElement} />}
          <button className="btn btn-primary mx-3" type="submit">Submit</button>
        </form>
        <h3>Form Input Value : <strong>{submitValue}</strong></h3>
      </div>
    </div>
  )
}

export default SimpleCounter
