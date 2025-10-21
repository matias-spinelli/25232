import './App.css'
import { Boton } from './components/boton'
import { Header } from './components/Header/Header'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { Footer } from './components/Footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { CartProvider } from './context/CartContext/CartProvider'

function App() {
const arrayProductos = [
  {id: 1, nombre: "Remera", precio: 20000, descripcion: "Remera de algodon"},
  {id: 2, nombre: "Pantalon", precio: 80000, descripcion: "Pantalon de Jean"},
  {id: 3, nombre: "Zapatillas", precio: 110000, descripcion: "Zapatillas deportivas"},
]
  return (
    <>
    <BrowserRouter>
      <CartProvider>
      <div>
        <Header/>
        
        <Routes>
          <Route path={"/"} element={ <ItemListContainer titulo={"Bienvenidos a la tienda de Embark"} />}/>
          <Route path={"/detail/:id"} element={ <ItemDetailContainer />}/>
        
        </Routes>
        <Footer/>
      </div>
      </CartProvider>
    </BrowserRouter>
    </>
  )
}

export default App
