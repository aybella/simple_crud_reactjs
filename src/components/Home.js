import React, { useEffect, useState } from 'react';

function Home() {



  const [count,setCount] = useState(0);

  function increment() {
    if(count <10) {
      setCount(count+1);
    }
    
  }
  function decrement() {
    if(count>0) {
      setCount(count-1);
    }
    
  }
  function reset() {
    setCount(0);
  }  
  useEffect(()=>{
  alert('test')
  },[count])
  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}

export default Home
