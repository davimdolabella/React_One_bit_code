import { Link } from "react-router-dom";
import ItemForm from "../components/Form/ItemForm";
import { useItemsContext } from "../context/ItensContext";
export default function CriarItem(){
    const {CreateItem} = useItemsContext()
    return(
        <div>
            <h1>Criar Item</h1>
            <ItemForm formFunction={CreateItem}/>
            <Link className="btn btn-outline-primary" to={'/Gestor-de-Estoque/'}>Home</Link>
        </div>
    )
}