import './App.css'
import { Boton } from './components/boton'
import { Header } from './components/Header/Header'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { Footer } from './components/Footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { CartProvider } from './context/CartContext/CartProvider'
import { Cart } from './components/Cart/Cart'
import { ProductFormContainer } from './components/adminComponents/ProductFormContainer/ProductFormContainer'


/**
 
VAMOS A HACER EL CHULETUTE !!!
que es el chulengo de tute
asi que vamos a vender comida
categoria carnes
catgoria achuras
chinchulin la especialidad de la casa

 */
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
          <Route 
            path={"/"} 
            element={ <ItemListContainer titulo={"Bienvenidos a la tienda de Embark"} />}
          />
          <Route 
            path={"/category/:category"} 
            element={ <ItemListContainer titulo={"Bienvenidos a la tienda de Embark"} />}
          />
          <Route path={"/detail/:id"} element={ <ItemDetailContainer />}/>
          <Route path={"/carrito"} element={ <Cart /> }/>
          <Route path={"/admin"} element={ <ProductFormContainer /> }/>
        
        </Routes>
        <Footer/>
      </div>
      </CartProvider>
    </BrowserRouter>
    </>
  )
}

export default App
