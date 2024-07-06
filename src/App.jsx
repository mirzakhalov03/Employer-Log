import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './routers/home/Home.jsx'
import Fired from './routers/fired/Fired.jsx'
import Nav from './components/nav/Nav.jsx'
import Promoted from './routers/promoted/Promoted.jsx'

function App() {

  return (
    <>
    <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/promoted' element={<Promoted />}/>
        <Route path='/fired' element={<Fired />}/>
      </Routes>
    </>
  )
}

export default App
