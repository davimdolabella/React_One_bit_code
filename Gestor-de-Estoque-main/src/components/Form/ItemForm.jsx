import { useState } from "react"
import { useNavigate } from "react-router-dom";
import InputFormItem from "./InputFormItem"
export default function ItemForm({formFunction, id, initialValues}){
    const [name, setName] = useState(initialValues? initialValues.name : '');
    const [price, setPrice] = useState(initialValues? initialValues.price : 0);
    const [quantity, setQuantity] = useState(initialValues? initialValues.quantity : 0);
    const [description, setDescription] = useState(initialValues? initialValues.description : '');
    const navigate = useNavigate()
    const Submit = (e) =>{
        e.preventDefault()
        const item = {name, price, quantity, description}
        id ? formFunction(id, item) : formFunction(item)
        navigate('/Gestor-de-Estoque/itens')
    }
    
    return(
        <form className="col-4" onSubmit={Submit}>

            <InputFormItem name={'Nome'} type={'text'} id={'name'} value={name} setValue={setName}/>
            <InputFormItem name={'Preço'} type={'number'} id={'price'} value={price} setValue={setPrice}/>
            <InputFormItem name={'Quantidade'} type={'number'} id={'quantity'} value={quantity} setValue={setQuantity}/>

            <textarea id="textarea" onChange={(e) => setDescription(e.target.value)} className="form-control my-3" value={description}>{description}</textarea>

            <input type="submit" className="btn btn-outline-primary mb-5" />
        </form>
    )
}