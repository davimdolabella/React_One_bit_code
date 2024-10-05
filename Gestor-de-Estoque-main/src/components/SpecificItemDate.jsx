export default function SpecificItemDate({item}){
    return(
        <div className="d-flex flex-column align-items-center bg-secondary col-6 mx-auto rounded py-5 text-light gap-3">
            <h2>Nome: {item.name}</h2>
            <h2>Preço: {parseFloat(item.price)}</h2>
            <h2>Quantidade: {parseInt(item.quantity)}</h2>
            <h2>Descrição: </h2>
            <h5 className="w-50 text-center text-wrap " style={{ wordBreak: 'break-all', lineHeight: '1.8' }}>
                {item.description} 
            </h5>
        </div>
    )
}