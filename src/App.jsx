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

  return (
    <BrowserRouter>
      <CartProvider>
        <div className="app-layout">
          <Header />

          <main>
            <Routes>
              <Route
                path={"/"}
                element={<ItemListContainer titulo={"Bienvenidos a la tienda de Embark"} />}
              />
              <Route
                path={"/category/:category"}
                element={<ItemListContainer titulo={"Bienvenidos a la tienda de Embark"} />}
              />
              <Route path={"/detail/:id"} element={<ItemDetailContainer />} />
              <Route path={"/carrito"} element={<Cart />} />
              <Route path={"/admin"} element={<ProductFormContainer />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
