import { Link } from "react-router-dom"
import { useItemsContext } from "../../context/ItensContext"
export default function ItemOfList({item}){
    const {DeleteItem} = useItemsContext()
    return(
        <div className=" d-flex flex-column flex-sm-row gap-3 my-4 align-items-center bg-secondary text-light p-5 rounded justify-content-center">
            <h3>{item.name}</h3>
            <h3>{`R$${parseFloat(item.price).toFixed(2)}`}</h3>
            <Link className="btn btn-success" to={`/Gestor-de-Estoque/itens/${item.id}`}>Detalhes</Link>
            <button className="btn btn-danger" onClick={() => DeleteItem(item.id)}>Excluir</button>
        </div>
    )
}