import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'



function App() {
  var num = (n)=>{
    
    const [cityName, setCityName] = useState(n);
  

  
    }

  return (
    
    <>  
     <div class="content">
    
     <h2>{cityName}</h2>

     <input type="text" id="pant1" disabled />
      <br />
      <input type="text" id="pant2" disabled />
    <hr/>
<table>
  <tr>
    <th> <button onClick={() => num(7)}>7</button> </th>
    <th> <button>8</button> </th>
    <th> <button>9</button> </th>
    <th> <button >/</button> </th>
  </tr>
  <tr>
    <th> <button>4</button> </th>
    <th> <button>5</button> </th>
    <th> <button>6</button> </th>
    <th> <button >x</button> </th>
  </tr>
  <tr>
    <th> <button >1</button> </th>
    <th> <button>2</button> </th>
    <th> <button>3</button> </th>
    <th> <button>-</button> </th>
  </tr>
  <tr>
    <th> <button >0</button> </th>
    <th> <button>,</button> </th>
    <th> <button  class="igual">=</button> </th>
    <th> <button >+</button> </th>
  </tr>
  </table>
    </div>
  </>
 
  )
}

export default App
