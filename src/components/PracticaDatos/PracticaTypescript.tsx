import { useState } from "react";


export const PracticaTypescript = () => {

    const [texto, setTexto] = useState<string>('');
    const [texto2, setTexto2] = useState<string>('');
    const [texto3, setTexto3] = useState<string>('');
    const [texto4, setTexto4] = useState<string>('');

    const handleClick = (e: { preventDefault: () => void; }) => {

        e.preventDefault();

        /* const texto : false = document.getElementById('texto'); */

        console.log(setTexto)
        console.log(setTexto2)
        console.log(setTexto3)
        console.log(setTexto4)
    }

    const objetosDatos = { 
        nombre : 'Gabriel',
        apellido: 'Torres',
        profesion: 'Programador',
        edad: 20
    }

    const arrayDatos: string[] = ['Uno', 'Dos', 'Tres', 'Cuatro', 'Cinco', 'Seis', 'Siete', 'Ocho', 'Nueve', 'Diez'];

    const posicion = arrayDatos.indexOf('Cinco')

    const array1: string[] = ['A', 'B', 'C'];


   

  return (
    <div>
        <h1>PracticaTypescript</h1>
        <div className="seccionDatos">
            <h2>Datos</h2>
        <ul>
            <li>{objetosDatos.nombre}</li>
            <li>{objetosDatos.apellido}</li>
            <li>{objetosDatos.profesion}</li>
            <li>{objetosDatos.edad}</li>
        </ul>
        {arrayDatos.map((list, index) => (
            <ul key={index}>
                <li>{list}</li>
            </ul>
        ))}
        
        <div>
            <h2>{posicion}</h2>
            <h2>{array1}</h2>
        </div>
            
        </div>

        <div className="seccionArray">
            <h2>Arrays</h2>
            <form className="controlFormulario">
                <input type="text" placeholder="Rellena Texto" id="texto" value={texto} onChange={(e) => setTexto(e.target.value)} />
                <input type="text" placeholder="Rellena Texto" value={texto2} onChange={(e) => setTexto2(e.target.value)} />
                <input type="text" placeholder="Rellena Texto" value={texto3} onChange={(e) => setTexto3(e.target.value)} />
                <input type="text" placeholder="Rellena Texto" value={texto4} onChange={(e) => setTexto4(e.target.value)} />
                <button onClick={handleClick}>Enviar</button>
            </form>
            <h2>{texto}</h2>
            <h2>{texto2}</h2>
            <h2>{texto3}</h2>
            <h2>{texto4}</h2>
        </div>
    </div>
  )
}