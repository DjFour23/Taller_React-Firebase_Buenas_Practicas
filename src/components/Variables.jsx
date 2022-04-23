import React from 'react';

const Variables = () =>{
    const saludo = "Hola Mundo"
    const imagen = 'https://picsum.photos/200'
    const texto_alterativo = 'Esto es un texto alternativo'
    return(
        <>
            <h2>{saludo}</h2>
            <img src={imagen} alt = {texto_alterativo}/>
        </>
    )
}

export default Variables;