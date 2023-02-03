import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";






function App() {
  
 
  const [num, setnum] = useState('');

  const [nu2, setnu2] = useState('');
  const [oper, setoper] = useState('');

 const Num =(e)=>{
    setnum(num + e.target.value);
    
 }

 const Signo1 = (e)=>{
  const a = e.target.value
  if (a == "+" ) {
    setnu2(num);
    setnum(" ");
    setoper(a);
   
  } else if (a == "-") {
    setnu2(num);
    setnum(" ");
    setoper(a);
  }
  else if (a == "x") {
    setnu2(num);
    setnum(" ");
    setoper(a);


  }
  else if (a == "/") {
    setnu2(num);
    setnum(" ");
    setoper(a);
  }
 }

 
const Result =()=>{
      if (oper == "+") {
        setnu2(  parseFloat(nu2) + parseFloat (num) );
        setnum("");
      } else if(oper == "-") {
        setnu2(  parseFloat(nu2) - parseFloat (num) );
        setnum("");
      }else if (oper == "x"){
        setnu2(  parseFloat(nu2) * parseFloat (num) );
        setnum("");
      }else if (oper == "/"){
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
