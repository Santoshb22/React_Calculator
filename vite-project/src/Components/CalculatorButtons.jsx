import React from 'react'
import styles from './ButtonCont.module.css'

const CalculatorButtons = ( { onButtonClick, buttonTexts } ) => {
  return (
    <div className={styles.buttonsContainer}>
       {
        buttonTexts.map((button) => <button
         key={button} 
         className={styles.buttons}
         onClick={() => {onButtonClick(button)}}
         >{button}</button>)
       }
    </div>
  )
}

export default CalculatorButtons