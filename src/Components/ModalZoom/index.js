import styles from "./ModalZoom.module.css"
import ActualizarDatos from "../ActualizarDatos"
import {  AiOutlineEdit} from "react-icons/ai"


const ModalZoom = (props) => {

    const {isOpen, openModal, closeModal } = props
    const clase = isOpen ?  styles.Overlay:styles.none;

    return <>
        <div className={styles.contenedor}>
            
            <AiOutlineEdit  onClick={openModal} className={styles.eliminar} />
            <p>EDITAR</p>
            <ActualizarDatos
                className={clase}
                closeModal={closeModal} />
        </div>
                 
        </>

}

export default ModalZoom