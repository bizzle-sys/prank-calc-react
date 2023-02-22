import './App.css';
import { useState } from 'react';
import { BtnComp } from './components/BtnComp';

const operator = ["+", "-", "*", "/", "%"]


function App() {
  const [str, setStr] = useState("")
  const [lastOperator, setlastOperator] = useState("")
  const setRealTimeDisplay = val =>{
    setStr(str + val)

    
    const total = (calculateStr) => {
      const extra = randomNumber()
      const ttl = eval(calculateStr) + extra
      setStr(ttl.toString())
}
  
  const randomNumber = () => {
      const num = Math.round(Math.random() * 10)
      return num <= 3 ? num : 0
  }
  if (operator.includes(val)){
    if (!str){
      return
    }
    // for dot usecase
    setlastOperator(val) 

    const lastChar = str[str.length - 1]
    if(operator.includes(lastChar)){
      return setStr(str.slice(0, -1) + val)
    }
  }
    if (val === 'AC') {
     setStr("")
      return
  }
  if (val === 'C') {
    if (str.length){
      setStr(str.slice(0, -1))
    }
    return
     
      }
      if (val === '=') {
        let dtStr = str
      const lastchar = dtStr[dtStr.length - 1]
      if (operator.includes(lastchar)) {
          dtStr = str.slice(0, -1)
      }
      total(dtStr)
      
      return
  }
  if (val === ".") {
    // long approach
    if (lastOperator) {
        const operatorIndex = str.lastIndexOf(lastOperator)
        const lastNumberSet = str.slice(operatorIndex + 1)

        if (lastNumberSet.includes(".")) {
            return
        }
    }
    if (!lastOperator && str.includes(".")) {
        return
    }
  }
  setStr(str + val)

}


  const btns = [
    { 
      label: str || "0.00", cls: "display"
    },
    {
      label: "AC", cls: "btn-ac"
    }
    ,
    {
      label: "C", cls: "btn-c"
    }
    ,
    {
      label: "%", cls: "btn-perc"
    }
    ,
    {
      label: "/", cls: "btn-divide"
    }
    ,
    {
      label: "7", cls: "btn-7"
    }
    ,
    {
      label: "8", cls: "btn-8"
    }
    ,
    {
      label: "9", cls: "btn-9"
    }
    ,
    {
      label: "*", cls: "btn-x"
    }
    ,
    {
      label: "4", cls: "btn-4"
    }
    ,
    {
      label: "5", cls: "btn-5"
    }
    ,
    {
      label: "6", cls: "btn-6"
    }
    ,
    {
      label: "-", cls: "btn-minus"
    }
    ,
    {
      label: "1", cls: "btn-1"
    }
    ,
    {
      label: "2", cls: "btn-2"
    }
    ,
    {
      label: "3", cls: "btn-3"
    }
    ,
    {
      label: "+", cls: "btn-plus"
    }
    ,
    {
      label: "0", cls: "btn-0"
    }
    ,
    {
      label: "+", cls: "btn-plus"
    }
    ,
    {
      label: ".", cls: "btn-dot"
    }
    ,
    {
      label: "=", cls: "btn-equal"
    }
  ]
  return (
    <div class="wrapper">
      <div class="circle"></div>
      <div class="calculator">
{btns.map((item, i)=> <BtnComp {...item} setRealTimeDisplay = {setRealTimeDisplay}/>)}

       
      </div>
    </div>
  );
}

export default App;
