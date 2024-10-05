export default function InputFormItem({name, type, id, value, setValue}){
    return(
        <div className="form-group my-3">
            <label>{name}</label>
            <input 
                className="form-control"
                type={type} 
                id={id} 
                name={id}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                required
            />
        </div>
    )
}