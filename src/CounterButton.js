import { useState } from "react";

const CounterButton = (props) => {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
  }
  return (
    <>
      <button className="btn btn-primary" onClick={increment}>
        {count}
      </button>
    </>
  );
};

export default CounterButton;
