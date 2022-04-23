import React from "react";

const Formulario = () => {
    const[fruta, setFruta] = React.useState('')
    const[descripcion, setDescripcion] = React.useState('')
    const[lista, setLista] = React.useState([])

    const guardarDatos = (e) => {
        e.preventDefault()

        //Alertas para comprobacion de campos vacios

        if(!fruta.trim()){
            return alert('Campo fruta vacío')
        }
        if(!descripcion.trim()){
            return alert('Campo descripcion vacío')
        }
        
        //Fin alertas para comprobacion de campos vacios
        setLista([...lista,
            {nombreFruta: fruta, nombreDescripcion: descripcion}
        ])
    }

    return(
        <div>
            <h2>Formulario</h2>
            <form onSubmit={guardarDatos}>
                <input
                    type="text"
                    placeholder='Ingrese Fruta'
                    onChange={(e) => setFruta(e.target.value)}
                />
                <input
                    type="text"
                    placeholder='Ingrese Descripcion'
                    onChange={(e) => setDescripcion(e.target.value)}
                />
                <button type='submit'>Agregar</button>
            </form>
            <ul>
                {
                    lista.map((item, index)=>(
                        <li key={index}>
                            <h4>{item.nombreFruta} - {item.nombreDescripcion}</h4>
                        </li>
                    ))
                }
            </ul>
        </div>
    )

}
export default Formulario;