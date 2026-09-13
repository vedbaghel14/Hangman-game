import './App.css'
import Textinputformcontainer from './components/textinputformcontainer/Textinputformcontainer'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Play from './pages/Play'




function App() {


  return (
    <div className='h-screen w-50vw flex flex-col justify-center items-center'>
    {/* <Textinputformcontainer /> */}
    <Routes>
      <Route path='/' element={<Textinputformcontainer />}></Route>
      <Route path='/play' element={<Play />}></Route>
    </Routes>

   
    </div>
  )
}

export default App
