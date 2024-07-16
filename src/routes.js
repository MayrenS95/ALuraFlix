import Formulario from "./pages/Formulario"
import App from "./pages/App";
import PaginaBase from "./pages/PaginaBase";
import NotFound from "./pages/NotFound"
import { BrowserRouter, Routes, Route } from "react-router-dom"


function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaBase />}>
          <Route index element={<App />}></Route>
          <Route path="formulario" element={<Formulario />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
