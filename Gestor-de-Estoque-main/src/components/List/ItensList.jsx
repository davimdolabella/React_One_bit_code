import { useItemsContext } from "../../context/ItensContext"
import ItemOfList from "./ItemOfList"

export default function ItensList(){
    const {itens} = useItemsContext()
    return(
        itens.length ?
        itens.map((item) =>(
            <ItemOfList item={item} key={item.id}/>
        )):
        <>
            <p>Adicione algum item</p>
        </>
    
    )
}