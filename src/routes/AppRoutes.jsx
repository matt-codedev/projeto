import {
   HashRouter,
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom"

import HomeFuncionario from "../pages/HomeFuncionario/HomeFuncionario"
import ListarProduto from "../pages/ListarProdutos/ListarProdutos"
import ListarCategoria from "../pages/ListaCategoria/ListarCategoria"

//BrowserRouter: recarrega toda a página
//HashRouter: recarrega só as partes necessárias

const AppRoutes = () =>{
    return (
        <HashRouter>
        <Routes>

            <Route
            path="/"
            element={<HomeFuncionario/>}
            />
             <Route
            path="/home"
            element={<HomeFuncionario/>}
            />
             <Route
            path="/produtos"
            element={<ListarProduto/>}
            />
            <Route
            path="/categorias"
            element={<ListarCategoria/>}
            />

        </Routes>
        </HashRouter>
        
    )
}

export default AppRoutes