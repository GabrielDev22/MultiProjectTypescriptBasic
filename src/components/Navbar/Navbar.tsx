import { useState } from "react"
import { Link } from "react-router-dom";

export const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar">
        <div className="nav_logo">DevGabriel</div>
        <div className={`nav_items ${isOpen && "open"}`}>
            <ul className="nav_list">
                <li className="nav_listItem">
                    <Link to='/'>PracticasDatos</Link>
                </li>
                <li className="nav_listItem">
                        <Link to='/edicionesUsuario'>EdicionesUsuarioTexto</Link>                
                </li>
                <li className="nav_listItem">
                        <Link to='/generadorHistorias'>GeneradorHistorias</Link> 
                </li> 
                <li className="nav_listItem">
                        <Link to='/galeriaImagenes'>Galeria</Link>
                </li>    
                <li className="nav_listItem">
                        <Link to='/progressBar'>ProgressBar</Link>
                </li>                
            </ul>
        </div>
        <div className={`nav_toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
  )
}