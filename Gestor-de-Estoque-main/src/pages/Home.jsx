import { Link } from "react-router-dom";
import Dashboard from "../components/Dashboard/Dashboard";

export default function Home(){
    return(
        <div>
            
            <Dashboard/>
            <Link className="btn btn-outline-primary" to={'/Gestor-de-Estoque/itens'}>Itens</Link>
        </div>
    )
}