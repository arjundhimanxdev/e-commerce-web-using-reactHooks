import CartProvider from "./constants/cartContext.jsx"
import AppRoutes from "./routes"


const App = () => {
  return (
    <>
    <CartProvider>
    <AppRoutes/>
    </CartProvider>
    </>
  )
}

export default App