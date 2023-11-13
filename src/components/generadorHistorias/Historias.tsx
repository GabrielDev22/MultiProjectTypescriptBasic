import "./Historia.css"
import {data} from "./Historia";
import {useState} from "react"

export const Historias = () => {

    const [accion, setAccion] = useState(false);
    const [drama, setDrama] = useState(false);
    const [suspenso, setSuspenso] = useState(false);
    const [romance, setRomance] = useState(false);

    const handleAccion = () => {
        setAccion(!accion)
        setDrama(false)
        setRomance(false)
        setSuspenso(false)
        console.log("Se hizo click en Accion")
    }

    const handleDrama = () => {
        setDrama(!drama)
        setAccion(false)
        setRomance(false)
        setSuspenso(false)
    }

    const handleSuspenso = () => {
        setSuspenso(!suspenso)
        setDrama(false)
        setRomance(false)
        setAccion(false)
    }

    const handleRomance = () => {
        setRomance(!romance)
        setAccion(false)
        setSuspenso(false)
        setAccion(false)
    }

    const borrarHistoria = () =>{
        setAccion(false)
        setDrama(false)
        setSuspenso(false)
        setRomance(false)
    }


  return (
    <>
    <div className="contenedorGeneradorHistorias">
        <h1>Historias</h1>
        <div className="exampleHistory">
            <h3>Bienvenido al generador de historias aleatorias</h3>
            <p>
                Para poder generar algunas historias dentras que seguir las siguientes instrucciones de esta manera podras generar historias locas y de forma aleatoria en base a tus decisiones
            </p>

            <div>
                <button onClick={handleAccion}>Accion</button>
                <button onClick={handleDrama}>Drama</button>
                <button onClick={handleSuspenso}>Suspenso</button>
                <button onClick={handleRomance}>Romance</button>
                <button onClick={borrarHistoria}>Borrar Historia</button>
            </div>

            <div className={`historia ${accion ? 'flex' : ''}`}>
                {data.map((accion, index) => (
                    <div key={index}>
                        <h1>{accion.titulo}</h1>
                        <p className="textoDeLaHistoria">{accion.accion}</p>
                        <p className="textoDeLaHistoria">{accion.texto1}</p>
                        <p className="textoDeLaHistoria">{accion.texto2}</p>
                        <p className="textoDeLaHistoria">{accion.texto3}</p>
                        <p className="textoDeLaHistoria">{accion.texto4}</p>
                    </div>
                ))}
            </div>

            <div className={`historia ${drama ? 'flex' : ''}`}>
                {data.map((drama, index) => (
                    <div key={index}>
                        <h1>{drama.titulo2}</h1>
                        <p className="textoDeLaHistoria">{drama.drama}</p>
                        <p className="textoDeLaHistoria">{drama.texto5}</p>
                        <p className="textoDeLaHistoria">{drama.texto6}</p>
                        <p className="textoDeLaHistoria">{drama.texto7}</p>
                        <p className="textoDeLaHistoria">{drama.texto8}</p>
                    </div>
                ))}
            </div>

            <div className={`historia ${suspenso ? 'flex' : ''}`}>
                {data.map((suspenso, index) => (
                    <div key={index}>
                        <h1>{suspenso.titulo3}</h1>
                        <p className="textoDeLaHistoria">{suspenso.suspenso}</p>
                        <p className="textoDeLaHistoria">{suspenso.texto9}</p>
                        <p className="textoDeLaHistoria">{suspenso.texto10}</p>
                        <p className="textoDeLaHistoria">{suspenso.texto11}</p>
                        <p className="textoDeLaHistoria">{suspenso.texto12}</p>
                    </div>
                ))}
            </div>

            <div className={`historia ${romance ? 'flex' : ''}`}>
                {data.map((romance, index) => (
                    <div key={index}>
                        <h1>{romance.titulo4}</h1>
                        <p className="textoDeLaHistoria">{romance.romance}</p>
                        <p className="textoDeLaHistoria">{romance.texto13}</p>
                        <p className="textoDeLaHistoria">{romance.texto14}</p>
                        <p className="textoDeLaHistoria">{romance.texto15}</p>
                        <p className="textoDeLaHistoria">{romance.texto16}</p>
                    </div>
                ))}
            </div>

            
           
            
        </div>

    </div>
    </>
  )
}