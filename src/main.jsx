import{ StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RegisterPage } from './component/Page/Register.jsx'
import { LoginPage } from './component/Page/Login.jsx'
import { NotFound } from './component/Page/NotFound.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,
    errorElement: <NotFound/>
  },
  {
    path: "/login",
    element: <LoginPage/>
  },
  {
    path: "/register",
    element: <RegisterPage/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
