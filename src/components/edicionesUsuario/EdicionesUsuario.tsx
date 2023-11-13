import "./EdicionesUsuario.css";
import {useState} from "react";

export const EdicionesUsuario = () => {

  const [click, setClick] = useState(false);
  const [clickTop, setClickTop] = useState(false);
  const [clickBottom, setClickBottom] = useState(false);
  const [clickLeft, setClickLeft] = useState(false);
  const [clickCenter, setClickCenter] = useState(false);
  const [negrita, setNegrita] = useState(false);
  const [cursiva, setCursiva] = useState(false);
  const [subrayar, setSubrayar] = useState(false);

  const moveToCenter = () => {
    setClickCenter(!clickCenter)
  }

  const moveToRight = () => {
    setClick(!click)
    console.log('Se hizo Click')
  }

  const moveToLeft = () => {
    setClickLeft(!clickLeft)
    console.log("Se hizo Click")
  }

  const moveTop = () => {
    setClickTop(!clickTop)
    console.log("Se hizo Click")
  }

  const moveToBottom = () => {
    setClickBottom(!clickBottom)
    console.log("Se hizo Click")
  }

  const addNegrita = () => {
    setNegrita(!negrita);
  }

  const addItalic = () => {
    setCursiva(!cursiva);
  }

  const addSubrayar = () => {
    setSubrayar(!subrayar);
  }

  return (
    <div>
        <h1>EdicionesUsuario</h1>
        <div className="contenedorIconosCambios">

          <div className="icono" onClick={moveToCenter}>
            <i className='bx bxs-objects-horizontal-center bx-lg'></i>
          </div>

          <div className="icono" onClick={moveToLeft}>
            <i className='bx bx-chevron-left bx-lg'></i>
          </div>
          
          <div className="icono" onClick={moveToRight}>
            <i className='bx bx-chevron-right bx-lg'></i>
          </div>

          <div className="icono" onClick={moveToBottom}>
            <i className='bx bxs-arrow-to-top bx-lg'></i>
          </div>

          <div className="icono" onClick={moveTop}>
            <i className='bx bx-arrow-to-bottom bx-lg'></i>
          </div>

          <div className="icono" onClick={addNegrita} >
            <i className='bx bx-font-color bx-lg'></i>
          </div>

          <div className="icono" onClick={addItalic} >
            <i className='bx bx-italic bx-lg'></i>
          </div>

          <div className="icono" onClick={addSubrayar} >
            <i className='bx bx-underline bx-lg'></i>
          </div>

          <div className={`contenedorTextoEditar ${clickTop ? 'top' : ''} ${click ? 'right' : ''}  ${clickBottom ? 'bottom' : ''} ${clickCenter ? 'center' : ''} ${clickLeft ? 'left' : ''} ${negrita ? 'bold' : ''} ${cursiva ? 'cursiva' : ''} ${subrayar ? 'subrayar' : ''} `}>
            <h2>Soy el texto Movible</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, cupiditate iste consequatur laudantium sint nobis quasi ipsum inventore doloribus natus.
            </p>
        </div>
        </div>
    </div>
  )
}