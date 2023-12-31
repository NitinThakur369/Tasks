import React, { useState } from 'react';

function ArithmeticOperations() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  const handleNum1Change = (e) => {
    setNum1(Number(e.target.value));
  };

  const handleNum2Change = (e) => {
    setNum2(Number(e.target.value));
  };

  const handleAdd = () => {
    setResult(num1 + num2);
  };

  const handleSubtract = () => {
    setResult(num1 - num2);
  };

  const handleMultiply = () => {
    setResult(num1 * num2);
  };

  const handleDivide = () => {
    setResult(num1 / num2);
  };

  return (
    <div>
      <h2>Arithmetic Operations</h2>
      <div>
        <label>
          Num1:
          <input type="number" value={num1} onChange={handleNum1Change} />
        </label>
      </div>
      <div>
        <label>
          Num2:
          <input type="number" value={num2} onChange={handleNum2Change} />
        </label>
      </div>
      <div>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleSubtract}>Subtract</button>
        <button onClick={handleMultiply}>Multiply</button>
        <button onClick={handleDivide}>Divide</button>
      </div>
      <p>Result: {result}</p>
    </div>
  );
}

export default ArithmeticOperations;
