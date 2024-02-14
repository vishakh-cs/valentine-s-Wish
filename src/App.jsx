import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./Welcome";


export default function App() {
  
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/welcome" element={<Welcome />} />
           
        
      </Routes>
      </BrowserRouter>
    </div>
  )
}
