import React from 'react';

const Contador = ()=>{
    const [contador, setContador] = React.useState(0)
    const aumentar = () => setContador(contador + 1)
    const disminuir = () => setContador(contador - 1)
    const cero = () => setContador(0)
    return(
        <>
        <hr/>
            <h2>Contador</h2>
            <h3>El valor de la variable contador es: {contador}</h3>
            <h1>{
                contador > 2 ? 'Es mayor a dos' : 'Es menor o igual a dos'
                }
            </h1>
            <button onClick={aumentar}>Aumentar la wea</button>
            <button onClick={disminuir}>Disminuir la wea</button>
            <button onClick={cero}>Echala pa 0</button>
        </>
    )
}

export default Contador;

