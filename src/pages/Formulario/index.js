import styles from "./Formulario.module.css"
import Campo from "../../Components/Campo"
import ListaOpciones from "../../Components/ListaOpciones"
import Boton from "../../Components/Boton"
import { useState } from "react"


function Categorias(props) {
    const [nombre, actualizarNombre] = useState("")
    const [descripcion, actualizarDescripcion] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")

    const [video, actualizarVideo] = useState("")

    const { registrarColaborador } = props

    const manejarEnvio = (e) => {
        e.preventDefault()
        console.log("Manejar el envio")
        let datosAEnviar = {
            nombre,
            foto,
            equipo,
            video,
            descripcion
        }
        registrarColaborador(datosAEnviar)
    }

    const limpiar = () => {
        let form = document.querySelector(".formulario");
        form.reset();
    }


    return (
        <>
            <div className={styles.contenedor}>
                <h1 className={styles.titulo}>NUEVO VIDEO</h1>
                <p >COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE COLABORADOR</p>
                <hr/>
                <h2 className={styles.titulo2}>Crear Tarjeta</h2>
                <hr/>
                <form className="formulario">
                <section className={styles.contenedor1}>
                    <Campo
                    titulo="Nombre"
                    placeholder="Ingrese el nombre"
                    required
                    valor={nombre}
                    actualizarValor={actualizarNombre}
                    />
                    <ListaOpciones
                    valor={equipo}
                    actualizarEquipo={actualizarEquipo}
                    equipos={props.equipos}
                    />
                </section>
                <section className={styles.contenedor1}>
                    <Campo
                    titulo="Imagen"
                    placeholder="Ingrese el enlace de la Imagen del colaborador"
                    required
                    valor={foto}
                    actualizarValor={actualizarFoto}
                    />
                    <Campo
                    titulo="Video"
                    placeholder="Ingrese el enlace del Video"
                    required
                    valor={video}
                    actualizarValor={actualizarVideo}
                    />
                </section>
                <section className={styles.contenedor2}>
                <Campo
                    titulo="Descripcion"
                    placeholder="Ingrese la descripcion del video"
                    required
                    valor={descripcion}
                    actualizarValor={actualizarDescripcion}
                    />
                </section>
                <div className={styles.botones}>
                    <Boton onClick={manejarEnvio} >Guardar</Boton>
                        <Boton onClick={limpiar}>Limpiar</Boton>
                    </div>
                </form>
            </div>
        </>
    )

}

export default Categorias