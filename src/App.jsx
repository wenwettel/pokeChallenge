import Home from "./pages/Home"
import { Routes, Route, Link } from "react-router-dom";
import PokemonDetails from "./pages/PokemonDetails";

function App() {

  return(
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/pokemon/:id" element={<PokemonDetails/>}/>
    </Routes>
  )
  
}

export default App
