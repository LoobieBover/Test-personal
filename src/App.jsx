import { Routes, Route} from "react-router-dom";

import './App.css'
import landing from '../Pages/landing/landing.jsx';

function App() {


  return (
    <>
     <Routes>
          <Route path="/" element={<landing/>}></Route>
      </Routes>
      
    </>
  )
}

export default App