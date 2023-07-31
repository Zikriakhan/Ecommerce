import React  from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Card from "./Card";
import Home from './Home'
import { CartProvider } from "react-use-cart";
function App() {
  return (
    <div className="App">
  <CartProvider>
  <Home/>
  <Card/>
  </CartProvider>
    </div>
  );
}

export default App;
