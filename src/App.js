import React, {useState} from 'react';
import Message from './Components/message';

function App() {
  
const [count, setCount] = useState(0)
const [isMorning, setMorning] = useState(true)

return(
  <div>
      < Message numbers={count} />
      <h1> Good {isMorning ? 'Morning' : 'Night'}</h1>
      <button onClick={()=> setCount (count + 1) }>Add My VALUE</button>
      <button onClick={()=> setCount (count - 1) }>Subtract My VALUE</button>
      <button onClick={()=>setMorning(!isMorning)}>Update Day</button>
 </div>
)
}
export default App