import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Vazhipad from './pages/Vazhipad'
import Auth from './pages/Auth'
import Dashboard from './pages/Dashboard'
import Pagenotfound from './pages/Pagenotfound'
import Footer from './components/Footer'
import About from './pages/About'
import Header from './components/Header'
import Common from './pages/Common'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import { useContext } from 'react'
import { loginResponseContext } from './context/Contextshare'

function App() {
  const { loginResponse } = useContext(loginResponseContext)
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/vazhipad' element={loginResponse ? <Vazhipad /> : <Pagenotfound />} />
        <Route path='/login' element={<Auth />} />
        <Route path='/about' element={<About />} />
        <Route path='/register' element={<Auth register={true} />} />
        <Route path='/dashboard' element={loginResponse ? <Dashboard /> : <Pagenotfound />} />
        <Route path='/common' element={<Common />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='*' element={<Pagenotfound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
