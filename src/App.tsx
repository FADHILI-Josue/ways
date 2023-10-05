import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
function App() {

  return (
    <div className='w-screen h-screen flex flex-col'>
         <BrowserRouter>
         <Navbar />
          <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/product/:id' />
            <Route />
          </Routes>
         </BrowserRouter>
    </div>
  )
}

export default App
