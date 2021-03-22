import React, {useState} from 'react';
import Message from './Components/message';

function App() {
  
// const [isMorning, setMorning] = useState(true)
const [count, setCount] = useState(0)


function increament(){
  setCount (prevCount => prevCount +1 )
}

function decreament(){
  setCount (prevCount => prevCount - 1 )
}



return(
  <div>
      < Message numbers={count} />      
      <button onClick={increament}>Add My VALUE</button>
      <button onClick={decreament}>Subtract My VALUE</button>

      {/* <h1> Good {isMorning ? 'Morning' : 'Night'}</h1> */}
      {/* <button onClick={setMorning(!isMorning)}>Update Day</button> */}
 </div>
)
}
export default App
