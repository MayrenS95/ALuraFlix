import styles from "./VideosFavoritos.module.css"


const Videos = (props) => {
    
    const { nombre, puesto, foto, equipo, id, fav } = props.datos
    const { colorPrimario, eliminarColaborador, like } = props
    const estilo = { borderColor: colorPrimario }

    return <div className={styles.colaborador}>
            <div style={estilo}>
                <img src={foto} alt={nombre} style={estilo} />
            </div>
        </div>
}

export default Videos