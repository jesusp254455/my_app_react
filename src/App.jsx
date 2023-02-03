import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";






function App() {
  
 var operador;
  const [num, setnum] = useState('');

  const [nu2, setnu2] = useState('');


 const Num =(e)=>{
    setnum(num + e.target.value);
    
 }

 const Signo1 = (e)=>{
  const a = e.target.value
  if (a == "+" ) {
    setnu2(num);
    setnum(" ");
    operador = "+"
   
  } else if (a == "-") {
    setnu2(num);
    setnum(" ");
    operador = "-"
  }
  else if (a == "x") {
    setnu2(num);
    setnum(" ");
    operador = "x";

<<<<<<< HEAD
     <input type="text" id="pant1" disabled />
      <br />
      <input type="text" id="pant2" disabled />
    <hr/>
<table>
  <tr>
  
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
=======
  }
  else if (a == "/") {
    setnu2(num);
    setnum(" ");
    operador = "/";
  }
 }
>>>>>>> 26d2b3179b4933520fd88a3d2b2c50ab49a56d82
 
const Result =()=>{
      if (operador == "+") {
        setnu2(  parseFloat(nu2) + parseFloat (num) );
        setnum("");
      } else if(operador == "-") {
        setnu2(  parseFloat(nu2) - parseFloat (num) );
        setnum("");
      }else if (operador == "x"){
        setnu2(  parseFloat(nu2) * parseFloat (num) );
        setnum("");
      }else if (operador == "/"){
        setnu2(  parseFloat(nu2) / parseFloat (num) );
        setnum("");
      }
}
function Igual(props) {

  return <>
          <button class="igual" onClick={Result} >{props.value}</button>
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
      <input type="text" id="pant1"   value={nu2} disabled />
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
