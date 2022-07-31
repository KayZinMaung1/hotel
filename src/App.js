
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/hotel_owner/Admin";
import Login from "./pages/hotel_owner/Login";
import Register from "./pages/hotel_owner/Register";
import Main from "./pages/traveller/Main";
import ShowHotelDetails from "./pages/traveller/ShowHotelDetails";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="*" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/main" element={<Main/>} />
      <Route path="/hotels/:id" element={<ShowHotelDetails/>} />
      <Route path="/admin/*" element={<Admin/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
