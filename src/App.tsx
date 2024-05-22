import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' 
import './globals.css'

import { Container } from './components/layout/Container'
import { Navbar } from './components/layout/Navbar'

import { Home } from './pages/Home'

function App() {
  return (
    <Router>

      <Navbar />
      <Container>
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
      </Container>
    </Router>
  )
}

export default App
