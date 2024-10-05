import DashboardItem from "./DashboardItem";
import { useItemsContext } from "../../context/ItensContext";
import { useState, useEffect } from "react";
export default function Dashboard(){
    const {itens, CreateItem, total} = useItemsContext()
    const [recentItens, setRecentItens] = useState(0)
    
    useEffect(() => {
        const intervalId = setInterval(() => {
            const now = new Date().getTime();
            const recent = itens.filter(item => (now - item.date < 20000)).length;
            setRecentItens(recent);
        }, 100);

        return () => clearInterval(intervalId);
    }, [itens]); 
    
    return(
        <div className="d-flex flex-wrap gap-2 justify-content-center my-4">
            <DashboardItem info={'Diversidade'} data={itens.length ? itens.length: 0}/>
            <DashboardItem info={'Quantidade'} data={total}/>
            <DashboardItem info={'Itens Recentes'} data={recentItens}/>
        </div>
    )
}