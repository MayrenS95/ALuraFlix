import styles from "./ListaOpAct.module.css"

const ListaOpciones = (props) => {

    //Metodo map -> arreglo.map( (equipo, index) => { 
    //    return <option></option>
    // })


    //const manejarCambio = (e) => {
        //console.log("cambio", e.target.value)
       // props.actualizarEquipo(e.target.value)
   // }

    return <div className={styles.listaopciones}>
                <label>Categoria</label>
                <select //</div>value={props.valor} onChange={manejarCambio}
                >
                    <option value=""  defaultValue="">Seleccione una categoria</option>
                    <option value="" >Front End</option>
                    <option value="" >Back End</option>
                    <option value="" >Innovacion y Gestion</option>

                    
                </select>
            </div>
}

export default ListaOpciones