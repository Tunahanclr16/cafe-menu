import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Menu from './pages/Menu'
import Header from './components/Navbar/Header'
import Products from './pages/Products'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path='/'element={<Menu/>}/>
    <Route path='category/:category_name' element={<Products />} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
