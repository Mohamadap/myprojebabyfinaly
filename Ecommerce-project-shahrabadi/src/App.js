import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Footer } from "./components/footer/Footer"
import { Header } from "./components/header/Header"
import { Home } from "./pages/home/Home"
import { Login } from "./pages/login/Login"
import { Regsiter } from "./pages/login/Regsiter"
import { useSelector } from "react-redux"
import { ProductsPage } from "./components/header/ProductsPage"
import NotFound from "./components/NotFound"


const App = () => {
  const isLoggIn = useSelector((state) => state.auth.isLoggIn)
  const cartItems = useSelector((state) => state.cart.itemsList)
  console.log(cartItems)
  return (
    <>
      {isLoggIn && (
        <Router>
          <Header />
     
          <Switch>
  <Route exact path="/" component={Home} />
  <Route exact path="/products" component={ProductsPage} />
  <Route component={NotFound} />
</Switch>
  
          <Footer />
   





          


        </Router>
      )}
      {!isLoggIn && <Login />}
     
      
    </>
  )
}
export default App
