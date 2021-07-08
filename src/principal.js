import { useState } from 'react'
import data from './quotes.json'
import './color.css';
//import './App.css';
//import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
//import {faTwitter} from '@fortawesome/free-brands-svg-icons';

/**data es el acceso al archivo quotes */

function QuoteBox () { // lo unico que hago es regresar una funcion con los valores indicados

    /**
     * 1. Crear un numero aleteario para elergir cualquier cita del archivo
     * 2. Mostrar cita  
     * 3. Cambiar de cita
     * 4. Por cada cambio, cambiar el color
     */

    let ran = parseInt(Math.random()*data.quotes.length);//para tener el numero aleatorio

    const [author, setAuthor] = useState(data.quotes[ran].author);
    const [quote, setQuote] = useState(data.quotes[ran].quote);
    const [color, setColor] = useState(0);
    let colors = [
        'blue','blue-1','green','green-1','green-2','yellow','yellow-1',
        'red','red-1','red-2','lila','purple'
    ]

    
    const next = () => {
        ran = parseInt(Math.random()*data.quotes.length);
        let nColor = parseInt(Math.random()*colors.length);
        setAuthor(data.quotes[ran].author);
        setQuote(data.quotes[ran].quote);
        setColor(nColor);
    }
        
    return (
        <div className={colors[color]}>
            <div className="quote">{quote}</div>
            <div className="author">--  {author}</div>
            <div>
                <button className="change" onClick={next}>NEXT</button>
                Prueba actualizada
            </div>         
        </div>
    )
}

export default QuoteBox