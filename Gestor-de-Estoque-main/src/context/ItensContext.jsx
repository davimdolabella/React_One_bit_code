import { createContext, useContext, useState } from "react";

export const ItensContext = createContext()

export const useItemsContext = () => useContext(ItensContext);

export const ItensProvider =({children}) =>{
    const [itens, setItens] = useState([])
    const [total, setTotal] = useState(0)
    
    
    const CreateItem = ({name, price, quantity,description}) =>{
        const id = Math.floor(Math.random() * 10000)
        const date = new Date().getTime()
        const item = {name, price, quantity, id, date, description}
        setItens(state => {
            const newState = [... state, item ]
            return newState
        })
        setTotal(state => parseInt(state) + parseInt(quantity))  
    }

    const DeleteItem = (id) =>{
        const newState = itens.filter(item => (item.id !== id))
        const total = newState.reduce((acc, item) => acc + item.quantity, 0) 
        setTotal(parseInt(total))
        setItens(newState)
    }

    const EditItem = (id, newItem) =>{
        const newState = itens.map(item => 
            item.id === id ? {...item, ...newItem} : item
        )
        const total = newState.reduce((acc, item) => acc + item.quantity, 0) 
        setTotal(parseInt(total))
        setItens(newState)
    }
    return(
        <ItensContext.Provider value={{itens, CreateItem, total, DeleteItem, EditItem}}>
            {children}
        </ItensContext.Provider>
    )
}