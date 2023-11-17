import "./ProgressBar.css";
import { useState } from "react";

export const ProgressBar = () => {

  const [click, setClick] = useState(false)
  const [boton, setBoton] = useState(false)

  const handleAnimar = () => {
    setClick(!click)
    setBoton(!boton)
    console.log('Click')
  }

  return (
    <div>
       <h1>ProgressBar</h1> 

      <div className="progressBar">
        <div className="barOne">
          <div className={`barTwo ${click ? 'animation' : ''}`}></div>
        </div>
      </div>

      <button className={`btnAnimar ${boton ? 'none' : ''}`} onClick={handleAnimar}>animar</button>

    </div>
  )
}