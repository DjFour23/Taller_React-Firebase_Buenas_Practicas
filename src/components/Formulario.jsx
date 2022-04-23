import React from "react";
import {nanoid} from 'nanoid'

const Formulario = () => {
    const[fruta, setFruta] = React.useState('')
    const[descripcion, setDescripcion] = React.useState('')
    const[lista, setLista] = React.useState([])
    const[id, setId] = React.useState('')

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
        <div className='container mt-5'>
            <h1 className="text-center">Formulario</h1>
            <hr/>
            <div className="row">
                <div className="col-8">
                    <h4 className="text-center">Listado de frutas</h4>
                    <ul className="list-group">
                        {
                        lista.map((item, index)=>(
                            <li className='list-group-item' key={index}>
                                <span className="lead">{item.nombreFruta} - {item.nombreDescripcion}</span>
                                <button className="btn btn-danger btn-sm float-end mx-2">Eliminar</button>
                                <button className="btn btn-warning btn-sm float-end mx-2">Editar</button>
                            </li>
                        ))
                        }
                    </ul>
                </div>
                <div className="col-4">
                    <h4 className="text-center">Agregar furtas</h4>
                    <form onSubmit={guardarDatos}>
                        <input
                            className="form-control mb-2"
                            type="text"
                            placeholder='Ingrese Fruta'
                            onChange={(e) => setFruta(e.target.value)}
                        />
                        <input
                        className="form-control mb-2"
                        type="text"
                        placeholder='Ingrese Descripcion'
                        onChange={(e) => setDescripcion(e.target.value)}
                        />
                        <button className='btn btn-primary btn-block' type='submit'>Agregar</button>
                    </form>
                </div>
            </div>
        </div>
    )

}
export default Formulario;