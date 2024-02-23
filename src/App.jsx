import Login from "./components/Login";
import Transaccion from "./components/Transaccion";
import CracionTransaccion from "./components/CracionTransaccion";
import Editar from "./components/Editar";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  BrowserRouter,
  Routes,
  Navigate
} from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
       <Routes>
        <Route path='/' element={<Login/>}>
        <Route path='Inicio' index  element={<Transaccion/>}/>
        <Route path='Creacion' index  element={<CracionTransaccion/>}/>
        <Route path='Editar/:FacturaId' element={<Editar/>}/>
          <Route path='*' element={<Navigate replace to="/" />} />
       </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
