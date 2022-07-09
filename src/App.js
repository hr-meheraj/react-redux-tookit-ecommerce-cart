import Nav from "./components/Nav";
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
function App() {
  return (
    <div className="mx-auto max-w-[1000px]">
      <Nav/>
      <Routes>
          <Route path='/' element={<Home></Home>}/>
          <Route path='/cart' element={<Cart></Cart>}/>
      </Routes>
    </div>
  );
}

export default App;
