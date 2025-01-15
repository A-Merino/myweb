import { useState } from 'react';
import './App.css';
import CCHolder from './../CCHolder/CCHolder.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CCHolder/>
    </>
  )
}

export default App
