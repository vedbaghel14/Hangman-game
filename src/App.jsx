import './App.css'
import Textinputformcontainer from './components/textinputformcontainer/Textinputformcontainer'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Play from './pages/Play'
import Home from './pages/Home'
import Singleplayer from './pages/Singleplayer'




function App() {


  return (
    <div className='h-screen w-50vw flex flex-col justify-center items-center'>
   
    <Routes>
      <Route path='/' element={<Home />}></Route>  
      <Route path='/singleplayer' element={<Singleplayer />}></Route>  
      <Route path='/multiplayer' element={<Textinputformcontainer />}></Route>
      <Route path='/play' element={<Play />}></Route>
    </Routes>

   
    </div>
  )
}

export default App
