import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Menu from './pages/Menu'
import Header from './components/Navbar/Header'

function App() {

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path='/'element={<Menu/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
