import styles from './App.module.css'
import React, { useState } from 'react'
import Display from './Components/Display'
import CalculatorButtons from './Components/CalculatorButtons'

function App() {
 
  let [ calVal, setCalVal ] = useState("");

  const buttonTexts= ["AC", "e", "%","/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "00", "0", ".", "="]
  
  const getBUttonText = (buttonTexts) => {
     let newDisplayVal = "";

     if (buttonTexts === "AC") {
      setCalVal("")
     } else if (buttonTexts === "=") {
      let result = eval(calVal);
      setCalVal(result);
     } else {
      newDisplayVal = calVal + buttonTexts
      setCalVal(newDisplayVal)
     }
  }

  return (
   <div className={styles.calculator}>
    <Display displayVal = {calVal} />
    <CalculatorButtons onButtonClick = {getBUttonText} buttonTexts = {buttonTexts}/>
   </div>
  )
}

export default App
