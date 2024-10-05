import { Link, useParams} from "react-router-dom";
import { useItemsContext } from "../context/ItensContext";
import SpecificItemDate from "../components/SpecificItemDate";
export default function ItemEspecifico(){
    const {itens} = useItemsContext()
    const {itemId} = useParams()

    const item = itens.find(item => item.id === parseInt(itemId))

    if (!item) {
        return <h1>Item não encontrado</h1>
      }
    return(
        <div>
            <Link className="btn btn-outline-primary" to={'/Gestor-de-Estoque/'}>Home</Link>
            <Link className="btn btn-outline-danger" to={'/Gestor-de-Estoque/itens'}>Voltar</Link>
            <Link className="btn btn-outline-success" to={`/Gestor-de-Estoque/itens/${itemId}/editarItem`}>Editar Item</Link>
            <SpecificItemDate item={item}/>

        </div>
    )
}