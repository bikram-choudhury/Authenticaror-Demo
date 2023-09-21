import { useCallback, useState } from "react";
import Child from "./Demo/Child";

export default function App() {
  const [number, setNumber] = useState(0);
  /* 
    [stateVariable, setStateHandler] = useState(initialValue);
  */
  /* const handleClick = () => {
    non-memoized event handler
    setNumber(number + 2);
  } */
  const handleClick = useCallback(() => {
    // memoized event handler
    console.log("number", number); // 0
    setNumber(number + 2);
  }, [number]);
  return (
    <>
      <button onClick={handleClick}>add 2</button>
      <span>{number}</span>
      <Child value="test" />
    </>
  )
}