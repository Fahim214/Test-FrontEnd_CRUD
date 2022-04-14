import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./Components/ProtectedRout";
import Login from "./pages/Login";
import RegisterScreen from "./pages/Register";
import AddProduct from "./pages/AddProduct";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<ProtectedRoute />} >
            <Route path="/home" element={<Home />} />
          </Route>

          <Route path="/add-product" element={<ProtectedRoute />}>
            <Route path="/add-product" element={<AddProduct />} />
          </Route>

          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
