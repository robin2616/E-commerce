import Header from './Header'
import Ending from './Ending'

import { Outlet } from 'react-router'


function App() {


  return (
    <>
 {/* <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1> */}
    <Header></Header>
    <Outlet></Outlet>
    <Ending></Ending>
  
    </>
  ) 
}

export default App
