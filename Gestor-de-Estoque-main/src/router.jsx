import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Itens from "./pages/Itens";
import ItemEspecifico from "./pages/ItemEspecifico";
ItemEspecifico
import CriarItem from "./pages/CriarItem";
import EditarItem from "./pages/EditarItem";

const router = createBrowserRouter([
    {
        path:'/Gestor-de-Estoque/',
        element: <App/>,
        children: [
            {
                path:'',
                element: <Home/>
            },
            {
                path:'itens',
                element: <Itens/>
            },
            {
                path:'itens/:itemId',
                element:<ItemEspecifico/>
            },
            {
                path:'itens/criarItem',
                element: <CriarItem/>
            },
            {
                path:'itens/:itemId/editarItem',
                element:<EditarItem/>
            }
        ]
    }
])
export default router