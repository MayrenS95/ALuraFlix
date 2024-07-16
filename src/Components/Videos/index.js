import styles from "./Videos.module.css"
import ModalZoom from "../ModalZoom"
import { useModal } from "../../Components/ModalZoom/UseModal"

import { AiOutlineDelete,AiFillHeart,AiOutlineHeart } from "react-icons/ai"

const Videos = (props) => {
    const [isOpenModal, openModal, closeModal] = useModal(false);
    
    const { nombre, foto,  id, fav } = props.datos
    const { colorPrimario, eliminarColaborador, like } = props
    const estilo = { borderColor: colorPrimario }

    return <div className={styles.colaborador}>
            <div style={estilo}>
                <img src={foto} alt={nombre} style={estilo} />
                <section className={styles.colaboradorOpciones} >
                    <section className={styles.opciones}>
                        <AiOutlineDelete className={styles.eliminar} onClick={() => eliminarColaborador(id)} />
                        <p>BORRAR</p>
                    <ModalZoom
                    isOpen={isOpenModal}
                    closeModal={closeModal}
                    openModal={openModal}/>
                    </section>
                <section className={styles.opciones}>
                </section>
                {fav ? <AiFillHeart  color="red" onClick={() => like(id)} /> : <AiOutlineHeart className={styles.eliminar} onClick={() => like(id)} />}
                </section>
            </div>
        </div>
}

export default Videos