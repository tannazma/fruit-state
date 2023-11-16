import { useEffect, useState } from "react";
 
const Tricky = () => {
  const [a, setA] = useState(false);
  const [b, setB] = useState(false);
 
  useEffect(() => {
    console.log("I am message 1");
  }, [a]);
 
  useEffect(() => {
    console.log("I am message 2");
  }, [b]);
 
  useEffect(() => {
    console.log("I am message 3");
  }, []);
 
  const resetBoth = () => {
    setA(false);
    setB(true);
  };
 
  return (
    <div>
      <button onClick={() => setA(!a)}>Flip A</button>
      <button onClick={() => setB(!b)}>Flip B</button>
      <button onClick={resetBoth}>Reset</button>
    </div>
  );
};
 
export default Tricky;
