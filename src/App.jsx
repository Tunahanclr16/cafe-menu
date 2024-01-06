import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Menu from './pages/Menu'
import Header from './components/Navbar/Header'
import Products from './pages/Products'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div className="flex flex-col min-h-screen">
    <BrowserRouter>
    <Header/>
    <div className="flex-grow">
    <Routes>
    <Route path='/'element={<Menu/>}/>
    <Route path='category/:category_name' element={<Products />} />
    </Routes>
    </div>
    <Footer/>
    </BrowserRouter>
    </div>
  )
}

export default App
