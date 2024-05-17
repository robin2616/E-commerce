import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css"
import { Route,RouterProvider,createBrowserRouter,createRoutesFromElements } from 'react-router-dom'

import Login from './Login.jsx'
import Signup from './Signup.jsx'
import Home from './Home.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
<Route path='/' element={<App/>}>
  <Route path='/login' element={<Login/>}></Route>
  <Route path='/signup' element={<Signup/>}></Route>
  <Route path='/home' element={<Home/>}></Route>
</Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
