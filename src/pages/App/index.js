import './App.css';
import Banner from "../../Components/Banner"
import Categorias from "../../Components/Categorias"
import { useState } from 'react';
import { v4 as uuid } from "uuid"



function App() {
  
  

  const [colaboradores, actualizarColaboradores] = useState([
    {
        "id": 1,
        "equipo": "Front End",
        "foto": "https://github.com/harlandlohora.png",
        "nombre": "Harland Lohora",
        "descripcion": "La funcionalidad conocida como Dark Mode está cada vez más popular, sendo encontrada en diversos tipos de aplicaciones, redes sociales, plataformas educacionales o de entretenimiento. ",
        "video":"https://www.youtube.com/watch?v=MxlxFhzGRV8",
        "fav": true
      },
      {
        "id": 2,
        "equipo": "Back End",
        "foto": "https://github.com/JeanmarieAluraLatam.png",
        "nombre": "Jeanmarie Quijada",
        "descripcion": "En este Alura+ nuestra instructora front-end, Jeanmarie Quijada, nos ayudará a entender que es Box Model, uno de los conceptos fundamentales para la construcción correcta de layouts de páginas web.",
        "video":"https://www.youtube.com/watch?v=ts9qfCKamKg",
        "fav": false
      },
      {
        "id": 3,
        "equipo": "UX y Diseño",
        "foto": "https://github.com/JeanmarieAluraLatam.png",
        "nombre": "Jeanmarie Quijada",
        "descripcion": "¿Cuál es la diferencia entre Front End y Back End? En este Alura Más, Jeanmarie Quijada nos explica las principales diferencias y terminologias del desarrollo web",
        "video":"https://www.youtube.com/watch?v=R9uaBxgCkyA",
        "fav": false
      },
      {
        "id": 4,
        "equipo": "Back End",
        "foto": "https://github.com/christianpva.png",
        "nombre": "Christian Velasco",
        "descripcion": "En este video, Christian Velasco nos explica qué significa ser un Programador en T, las ventajas de tener conocimiento en más de un área y dá ejemplo de grandes personalidades que se encuadran en el perfil de profesional en T.",
        "video":"https://www.youtube.com/watch?v=ra5ojn-Ax7U",
        "fav": false
      },
      {
        "id": 5,
        "equipo": "Innovación y Gestión",
        "foto": "https://github.com/JoseDarioGonzalezCha.png",
        "nombre": "Jose Gonzalez",
        "descripcion": "En este video, exploraremos el concepto de CRUD desde la perspectiva de un Desarrollador Front-End. Si eres un desarrollador web o estás interesado en el desarrollo de aplicaciones, es fundamental comprender cómo se realiza la creación, lectura, actualización y eliminación de datos en un sistema. Y eso es exactamente lo que aprenderás aquí.",
        "video":"https://www.youtube.com/watch?v=jr_98HCSTZc",
        "fav": false
      }
])

  
  
  
  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: "Back End",
      colorPrimario: "#00C86F",
      colorSecundario: "#30B97C"
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#6BD1FF",
      colorSecundario: "#08628B"
    },
    
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FFBA05",
      colorSecundario: "#E8C876"
    }
  ])


  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador", colaborador)
    //Spread operator
    actualizarColaboradores([...colaboradores, colaborador])
  }

  //Eliminar colaborador
  const eliminarColaborador = (id) => {
    console.log("Eliminar colaborador", id)
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }
    
   //Actualizar color de equipo
   const actualizarColor = (color, id) => {
    console.log("Actualizar: ", color, id)
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color
      }

       return equipo
    })
    actualizarEquipos(equiposActualizados)
   }
  
  
   const like = (id) => {
    console.log("like", id)
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })

    actualizarColaboradores(colaboradoresActualizados)
  }
  
  
  
   return (
     <div>
       
       {
         equipos.map((equipo) => <Banner
           datos={equipo}
           key={equipo.titulo}
           colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo && colaborador.fav === true)}
           eliminarColaborador={eliminarColaborador}
           actualizarColor={actualizarColor}
           like={like}
         />
         )
       }
       {
         equipos.map((equipo) => <Categorias
           datos={equipo}
           key={equipo.titulo}
           colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
           eliminarColaborador={eliminarColaborador}
           actualizarColor={actualizarColor}
           like={like}

         />
         )
       }
     </div>
   );
}

export default App
