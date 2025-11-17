import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Footer } from './components/Footer/Footer'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { CartProvider } from './context/CartContext/CartProvider'
import { Cart } from './components/Cart/Cart'
import { ProductFormContainer } from './components/adminComponents/ProductFormContainer/ProductFormContainer'
import { MainLayout } from './layouts/MainLayout'
import { AdminLayout } from './layouts/AdminLayout'
import { RutaProtegida } from './components/RutaProtegida/RutaProtegida'
import { Login } from './components/Login/Login'
import { ChuletuteAlertProvider } from './components/UI/ChuletuteAlert/ChuletuteAlertProvider.jsx'

function App() {
  return (
    <BrowserRouter>
      <ChuletuteAlertProvider>
        <CartProvider>
          <div className="app-layout">
            <main>
              <Routes>
                <Route element={<MainLayout />}>
                  <Route
                    path="/"
                    element={
                      <ItemListContainer
                        titulo="Bienvenidos a Chuletute"
                        subtitulo="Tu parrilla online favorita 🔥"
                      />
                    }
                  />
                  <Route path="/category/:category" element={<ItemListContainer />} />
                  <Route path="/detail/:id" element={<ItemDetailContainer />} />
                  <Route path="/carrito" element={<Cart />} />
                </Route>

                <Route path="/admin" element={<AdminLayout />}>
                  <Route index element={<Login />} />
                  <Route
                    path="alta-productos"
                    element={
                      <RutaProtegida>
                        <ProductFormContainer />
                      </RutaProtegida>
                    }
                  />
                </Route>
              </Routes>
            </main>
            <Footer />
          </div>
        </CartProvider>
      </ChuletuteAlertProvider>
    </BrowserRouter>
  )
}

export default App
