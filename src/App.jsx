import './App.css'
import { Route, Routes } from 'react-router-dom'
import Auth from './pages/Auth'
import DashBoard from './pages/DashBoard'
function App() {

  return (
    <>
  <Routes>
    <Route path='/' element={<Auth />}/>
    <Route path='/register' element={<Auth insideRegister/>}/>
    <Route path='/dashboard' element={<DashBoard/>}/>

  </Routes>
    </>
  )
}

export default App
