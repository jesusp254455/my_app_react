import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";






function App() {

  const [num, setnum] = useState('');

  


 const Num =(e)=>{
    setnum(num + e.target.value);
    
 }

 const Signo1 = (e)=>{
  if (condition) {
    
  } else {
    
  }
 }
 

function Igual(props) {

  return <>
          <button class="igual" >{props.value}</button>
  </>

}

function Boton(props) {

 
  return <> 
  
  <button onClick={Num} value={props.valor}>{props.valor}</button>
  
  </>
}

function Signo(props) {

 
  return <> 
  
  <button onClick={Signo1} value={props.sg}>{props.sg}</button>
  
  </>
}







 
  return (
    <>
      <div class="content">
      <input type="text" id="pant1"    disabled />
      <input type="text" id="pant1"  value={num}  disabled />
        <hr/>
        <table>
          <tr>
          <th> <Boton  valor="7"/> </th>
          <th> <Boton valor="8"/> </th>
          <th> <Boton valor="9"/> </th>
          <th> <Signo sg="/"/> </th>
          </tr>
          <tr>
          <th> <Boton valor="4"/> </th>
          <th> <Boton valor="5"/> </th>
          <th> <Boton valor="6"/> </th>
          <th> <Signo sg="x"/> </th>
          </tr>
          <tr>
          <th> <Boton valor="1"/> </th>
          <th> <Boton valor="2"/> </th>
          <th> <Boton valor="3"/> </th>
          <th> <Signo sg="-"/> </th>
          </tr>
          <tr>
          <th> <Boton valor="0"/> </th>
          <th> <Boton valor=","/> </th>
          <th> <Igual  value="="/> </th>
          <th> <Signo  sg="+"/> </th>
          </tr>
        </table>
      </div>
    </>
  );
}


export default App;
