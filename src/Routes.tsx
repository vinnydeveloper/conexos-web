import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Home from 'pages/Home'
import Planos from 'pages/Planos'
import Plano from 'pages/Plano'

export default function Routes() {

  const routesList = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/planos',
      element: <Planos />
    },
    {
      path: '/plano/:id',
      element: <Plano />
    }
  ])

  return <RouterProvider router={routesList} />
}