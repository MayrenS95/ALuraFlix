import styles from "./Footer.module.css"
import logo from "./logoFooter.png"

function Footer() {
    return (
        <>
            <div className={styles.contenedor}>
                <img src={logo} alt="Logo Alura Flix" />
            </div>
        </>
    )

}

export default Footer