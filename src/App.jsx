import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";
import { useState } from "react";

function App() {

  const [pacientes, setPacientes] = useState([]);


  return (
    <div >
      <Header />
      <div className="mt-12 flex md:">
        <Formulario 
          pacientes={pacientes}
          setPacientes={setPacientes}
        />
        <ListadoPacientes 
          pacientes={pacientes}
        
        />
        
       
        
      </div>
    </div>
  )
}

export default App
