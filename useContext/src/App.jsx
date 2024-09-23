import { useContext } from 'react'
import { ThemeContext } from './context/ThemeContext'
import './App.css'
import { Outlet, Link } from 'react-router-dom'

function App() {
  const {theme, toggleTheme} = useContext(ThemeContext)

  return (
    <div className={`app ${theme === 'dark'? 'dark-theme': ''}`}>
      <h1>O tema atual é {theme}</h1>
      <button onClick={toggleTheme}>Mude o Tema</button>
      <Link to={'/contact'}>Contato</Link>
      <Link to={'/'}>Home</Link>
      <Outlet/>
    </div>
  )
}

export default App
