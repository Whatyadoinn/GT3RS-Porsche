import './App.css'
import Navbar from './Navbar'
import HeroVideo from './Home'
import About from './About'
import Service from './Service'
import Account from './Account'
import GT3RSDocumentation from './Documentation'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignIn from './SignIn'
import { HashRouter } from "react-router-dom";


function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroVideo />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/account" element={<Account />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path='/documentation' element={<GT3RSDocumentation/>} />
      </Routes>
    </HashRouter>
  )
}

export default App