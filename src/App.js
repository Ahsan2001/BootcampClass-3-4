import React, {useState} from 'react';
import Message from './Components/message';

function App() {
  
const [count, setCount] = useState(0)
return(

  <div>
      < Message numbers={count} />
      <button onClick={()=> setCount (count + 1) }>Add My VALUE</button>
      <button onClick={()=> setCount (count - 1) }>Subtract My VALUE</button>


</div>
)
}
export default App