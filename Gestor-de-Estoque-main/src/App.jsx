import {Outlet} from 'react-router-dom'

export default function App(){
  return(
    <div id="app" className='p-5'>
      <h1 className='text-center'>Gestor de estoque </h1>
      <Outlet/>
    </div>
  )
}