import { Routes, Route} from "react-router-dom";

import './App.css'
import Landing from '../src/assets/Pages/landing/landing.jsx'


function App() {


  return (
    <>
     <Routes>
          <Route path="/" element={<Landing/>}></Route>
      </Routes>
      
    </>
  )
}

export default App