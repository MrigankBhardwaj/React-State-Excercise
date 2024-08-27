import React,{ useState } from "react"

function SimpleCounter() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");
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
      <input type="text" value={inputValue} placeholder="Type Something..." onChange={handleChange}/>
      <button type="button" className="btn btn-danger mx-3" onClick={refreshFunction}>Refresh</button>
      <p>Input Value : <strong>{inputValue}</strong></p>
    </div>
  )
}

export default SimpleCounter
