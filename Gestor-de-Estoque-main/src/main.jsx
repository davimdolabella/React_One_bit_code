
import { createRoot } from 'react-dom/client'
import {RouterProvider} from 'react-router-dom'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ItensProvider } from './context/ItensContext'

createRoot(document.getElementById('root')).render(
    <ItensProvider>
      <RouterProvider router={router} />
    </ItensProvider>
)
