import React from "react";

const Eventos = ()=>{
    const [texto, setTexto] = React.useState('Texto inicial')
    const eventoClick = () => {
        console.log('Me diste click guarro')
        setTexto('Cambiando el texto . . .')
    }
    return(
        <>
            <h2>{texto}</h2>
            <button onClick={eventoClick }>Click</button>
        </>
    )
}

export default Eventos;