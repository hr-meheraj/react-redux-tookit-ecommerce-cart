import Nav from "./components/Nav";
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import SingleProducts from "./pages/SingleProducts";
function App() {
  return (
    <div className="mx-auto max-w-[1000px]">
      <Nav/>
      <Routes>
          <Route path='/' element={<Home></Home>}/>
          <Route path='/cart' element={<Cart></Cart>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/products/:id' element={<SingleProducts/>}/>
      </Routes>
    </div>
  );
}

export default App;
