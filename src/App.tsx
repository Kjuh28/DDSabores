import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' 
import './globals.css'

import { Container } from './components/layout/Container'
import { Navbar } from './components/layout/Navbar'
import { Home } from './pages/Home'
import { Empresa } from './pages/Empresa'

function App() {
  return (
    <Router>

      <Navbar />
      <Container>
            <Routes>
                <Route path='/' element={<Home />} />
                {/* <Route path='#Empresa' element={<Empresa /> }/> */}
            </Routes>
      </Container>

    </Router>
  )
}

export default App
