import { Routes, Route } from 'react-router-dom';
// import Layout  from "./pages/layout";
import Juego1 from "./pages/playtime1";
import Juego2 from "./pages/playtime2";
import Juego3 from "./pages/playtime3";
import Juego4 from "./pages/playtime4";
function App() {
  return (
  <div className='App'>
    <Routes>
        <Route path="/" element={<Juego1 />}>
      </Route>
      <Route path="/playtime1" element={<Juego1 />} />
        <Route path="/playtime2" element={<Juego2 />} />
        <Route path="/playtime3" element={<Juego3 />} />
        <Route path="/playtime4" element={<Juego4 />} />
    </Routes>
  </div>
      
   
  )
}

export default App;
