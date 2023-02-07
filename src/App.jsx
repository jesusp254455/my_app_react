import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";






function App() {
  
 
  const [num, setnum] = useState('');

  const [nu2, setnu2] = useState('');
  const [oper, setoper] = useState('');
  const [decimal, setdecimal] = useState(false);

 const Num =(e)=>{
    if(e.target.value == ","){
      if(decimal == false){
      setdecimal(",")
    }
    }else{
      setnum(num + e.target.value);
    }

   
    
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
  setdecimal(false);
      if (oper == "+") {
        const num3 =  parseFloat(nu2) + parseFloat (num) ;
        setnu2(" ");
        setnum(num3);
      } else if(oper == "-") {
        const num3 =  parseFloat(nu2) - parseFloat (num) ;
        
        setnum(num3);
      }else if (oper == "x"){
        const num3 = parseFloat(nu2) * parseFloat (num) ;
        setnu2(" ");
        setnum(num3);
      }else if (oper == "/"){
         const num3 =  parseFloat(nu2) / parseFloat (num) ;
        setnu2(" ");
        setnum(num3);
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
      <input type="text"   value={nu2} disabled />
      <input type="text"  value={num}  disabled />
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
