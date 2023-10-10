import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import Footer from './components/Footer'
import Product from './pages/Product'
import CartPage from './pages/CartPage'
import Success from './pages/Success'
import CheckoutPage from './pages/CheckoutPage'
function App() {

  return (
    <div className='w-screen flex bg-[#FAFAFA] flex-col overflow-x-hidden'>
         <BrowserRouter>
         <Navbar />
          <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/product/:id' element={<Product />}/>
            <Route path='/cart' element={<CartPage />}/>
            <Route path='/success' element={<Success />}/>
            <Route path='/checkout' element={<CheckoutPage />}/>
            <Route path="/*" element={<div className='w-screen min-h-[70vh] flex flex-col items-center justify-center text-4xl'><h1>Not Found</h1></div>} />
          </Routes>
            <Footer />
         </BrowserRouter>
    </div>
  )
}

export default App
