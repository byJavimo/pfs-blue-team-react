import React, {useEffect, useState} from 'react';
import './Hooks.scss';

const HooksCounter = () => {
    const [count, setCount] = useState(0);
    let [operation, setOperation] = useState('');

    useEffect(() => {
        console.log("Componente renderizado");
        console.log(count)
        console.log(operation);
    },[operation, count]);

    const handleIncrement = (param1, param2) => {
        setCount( count + param1);
        setOperation(operation = param2)
    }

    const handleDecrement = (param1, param2) => {
        setCount( count + param1);
        setOperation(operation = param2)
    }

    return (
      <div className="hooks"> 
        <button onClick={() => handleIncrement(1, 'increase')}> + </button>
        <button onClick={() => handleDecrement(1, 'decrease')}> + </button> 
        <p> Result: {count} </p>
      </div>
    );
  }
  export default HooksCounter;