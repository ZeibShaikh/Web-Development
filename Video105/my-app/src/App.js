import logo from './logo.svg';
import {useState} from 'react';

import './App.css';
function App() {
  const [counter, setcounter] = useState(0)
  return (
    <div className="App">
     <div className="b">{counter}</div>
      <button onClick={()=>{setcounter(counter+1)}}>click me</button>
     </div>
    
  );
}

export default App;
