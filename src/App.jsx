import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import {Routes, Route} from 'react-router-dom';


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
