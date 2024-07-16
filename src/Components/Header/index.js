import styles from "./Header.module.css"
import Boton from "../Boton"
import logo from "./Logo.png"
import { Link } from "react-router-dom"



function Header() {



    return (
        <>
            <div className={styles.header}>
                <img src={logo} alt="Logo Alura Flix" />
                <nav>
                    <Boton className={styles.botonH}
                    >
                        <Link className={styles.link}        to="http://localhost:3000/">HOME</Link>
                    </Boton>
                    <Boton className={styles.botonN}
                    >
                    <Link className={styles.link} to="http://localhost:3000/Formulario">NUEVO VIDEO</Link>
                    </Boton> 
                </nav>
            </div>
            
        </>
    )

}

export default Header