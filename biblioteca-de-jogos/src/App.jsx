import { useState } from "react"

export default function App(){
  const [title, setTitle] = useState('')
  const [cover, setCover] = useState('')
  const  handleSubmit = (ev) =>{
    ev.preventDefault()
    console.log(title, cover);
    setCover('')
    setTitle('')
    
  }
  return(
    <div id="app" className="container row mx-auto bg-secondary justify-content-center col-11  p-5 rounded mt-3 text-light shadow">
        <h1 className="text-center">Biblioteca de Jogos</h1>
        <form className="col-6 " onSubmit={handleSubmit}>
            <div className="form-group">
              <label >Título:</label>
              <input type="text" className="form-control" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div className="form-group">
              <label>Capa</label>
              <input type="text" className="form-control" id="cover" name="cover" value={cover} onChange={(e) => setCover(e.target.value)}/>
            </div>
            <button type="submit" className="btn btn-primary mt-3 col-12">Adicionar à Biblioteca</button>
          </form>
    </div>
  )
}