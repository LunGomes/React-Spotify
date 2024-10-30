import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'

import App from './App.jsx'
import Artista from './components/Artista.jsx'
import ConteudoPrincipal from './components/ConteudoPrincipal.jsx'
import Pesquisar from './components/Pesquisar.jsx'
import Pesquisas from './components/Pesquisas.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {index: true, element: <ConteudoPrincipal/>},
      {path: 'artistas/:id', element: <Artista/>},
      {path: 'pesquisar', element: <Pesquisar/>},
      {path: 'pesquisar/:search', element: <Pesquisas/>}
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
