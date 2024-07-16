import styles from "./ActualizarDatos.module.css"
import CampoActDatos from "../../Components/CampoActDatos"
import ListaOpciones from "../ListaOpAct"
import Boton from "../../Components/Boton"
import { AiFillCloseCircle } from "react-icons/ai"
import { useState } from "react"


const ActualizarDatos = (props) => {
    const { className, closeModal } = props

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
            <div className={className}>
                <div className={styles.contenedor}>
                    <section className={styles.header}>
                        <AiFillCloseCircle className={styles.cerrar} onClick={closeModal} />
                        <h1 className={styles.titulo}>EDITAR CARD:</h1>
                    </section>
                    <form>
                    <section className={styles.contenedor1}>
                        <CampoActDatos
                         titulo="Nombre"
                         placeholder="Ingrese el nombre del colaborador"
                         required
                         valor={nombre}
                         actualizarValor={actualizarNombre}
                        />
                        <ListaOpciones
                        valor={equipo}
                        actualizarEquipo={actualizarEquipo}
                        equipos={props.equipos}
                        />
                        <CampoActDatos
                        titulo="Imagen"
                        placeholder="Ingrese el enlace de la Imagen del colaborador"
                        required
                        valor={foto}
                        actualizarValor={actualizarFoto}
                        />
                        <CampoActDatos
                        titulo="Video"
                        placeholder="Ingrese el enlace del Video"
                        required
                        valor={video}
                        actualizarValor={actualizarVideo}
                        />
                        <CampoActDatos
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
            </div>
        </>
    )
}

export default ActualizarDatos