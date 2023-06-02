import React from 'react'
import {
  Routes,
  Route
} from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/footer/Footer'
import './App.css'
import Home from './pages/home/Home'
import About from './pages/about/About'


const App = () => {
  return (  
    <>
    <Header />
    <Routes>
      
      <Route path="/about" element={ <About /> } />
      <Route path="/" element={ <Home /> } />

    </Routes>
    <Footer />
    </>
   )
}
 
export default App