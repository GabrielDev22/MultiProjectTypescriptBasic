import "./GaleriaImagenes.css";
import { useState } from "react";

export const GaleriaImagenes = () => {

  const [imagenCompleta, setImagenCompleta] = useState(false);

  const handleImagenCompleta = () => {
    console.log('Se dio click')
    setImagenCompleta(!imagenCompleta)
  }
  
  return (
    <div>
        <h1>GaleriaImagenes</h1>
        <div onClick={handleImagenCompleta}>
          <img className={`imagen ${imagenCompleta ? 'imagenCompleta' : ''}`} src="img/fotoPrueba.avif" alt="" />
        </div>
    
    </div>
  )
}