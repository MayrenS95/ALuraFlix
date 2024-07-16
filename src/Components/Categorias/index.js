import styles from "./Categorias.module.css"
import Videos from "../Videos"



function Categorias(props) {
    const { colorPrimario, colorSecundario, titulo, id } = props.datos
    const { colaboradores, eliminarColaborador, actualizarColor, like,setColaboradorSeleccionada } = props
    


    const estiloTitulo = { borderColor: colorPrimario, backgroundColor:colorPrimario }



    return <>{
        
        colaboradores.length > 0 &&
        <div className={styles.contenedor}>
            <section className={styles.equipo} >
                <h3 style={estiloTitulo}>{titulo}</h3>
                <div className={styles.colaboradores}>
                    {colaboradores.map((colaborador, index) => <Videos
                    datos={colaborador}
                    key={index}
                    colorPrimario={colorPrimario}
                    eliminarColaborador={eliminarColaborador}
                    like={like}
                    alSeleccionarFoto={setColaboradorSeleccionada}
                    />)}
                </div>
                </section>
                </div>}
        

    </>


}

export default Categorias

