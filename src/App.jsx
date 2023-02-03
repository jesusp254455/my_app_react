import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'



function App() {

  let num = (n)=>{
   document.getElementById('pant2').value = document.getElementById('pant2').value + n;
  
    }

  return (
    
    <>  
     <div class="content">


     <input type="text" id="pant1" disabled />
      <br />
      <input type="text" id="pant2" disabled />
    <hr/>
<table>
  <tr>
    <th> <button onClick={() => num(7)}>7</button> </th>
    <th> <button  onClick={() => num(8)}>8</button> </th>
    <th> <button  onClick={() => num(9)}>9</button> </th>
    <th> <button  onClick={() => num("/")}>/</button> </th>
  </tr>
  <tr>
    <th> <button  onClick={() => num(4)}>4</button> </th>
    <th> <button  onClick={() => num(5)}>5</button> </th>
    <th> <button  onClick={() => num(6)}>6</button> </th>
    <th> <button  onClick={() => num("x")} >x</button> </th>
  </tr>
  <tr>
    <th> <button  onClick={() => num(1)} >1</button> </th>
    <th> <button  onClick={() => num(2)}>2</button> </th>
    <th> <button  onClick={() => num(3)}>3</button> </th>
    <th> <button  onClick={() => num("-")}>-</button> </th>
  </tr>
  <tr>
    <th> <button  onClick={() => num(0)} >0</button> </th>
    <th> <button  onClick={() => num(",")} >,</button> </th>
    <th> <button   class="igual">=</button> </th>
    <th> <button  onClick={() => num("+")} >+</button> </th>
  </tr>
  </table>
    </div>
  </>
 
  )
}

export default App
