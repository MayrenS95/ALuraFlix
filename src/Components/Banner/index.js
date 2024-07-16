import styles from "./Banner.module.css"
import Videos from "../VideosFavoritos"

function Banner(props) {
    const { colorPrimario, colorSecundario, titulo, id, fav} = props.datos
    const { colaboradores, eliminarColaborador, actualizarColor, like } = props
    


    const estiloTitulo = { borderColor: colorPrimario, backgroundColor:colorPrimario }


    return <>{
        colaboradores.filter(colaborador => colaborador.fav === true).length > 0 &&
                <div className={styles.fondo}>
                <section className={styles.equipo} >
                    <div className={styles.desEquipo}>
                        <h3 style={estiloTitulo}>{titulo}</h3>
                        <p className={styles.desEquipo}>{colaboradores.map((colaborador,index)=>colaborador.descripcion)}</p>
                    </div>    
                    <div className={styles.colaboradores}>
                            {colaboradores.filter(colaborador => colaborador.fav === true)
                                .map((colaborador, index) => <Videos
                        datos={colaborador}
                        key={index}
                        colorPrimario={colorPrimario}
                        eliminarColaborador={eliminarColaborador}
                        like={like}
                        />)}
                    </div>
                    </section>
                    </div>}

    </>

}

export default Banner