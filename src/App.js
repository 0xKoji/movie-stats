import React from "react"
import { Route, BrowserRouter as Router, Routes} from "react-router-dom"
import Details from "./pages/Details"
import Home from "./pages/Home"

export default function App(){
  return(
    <Router>
      <Routes>

        <Route path='/' element={<Home />} />

        <Route path='/:media/:id' element={<Details />} />

      </Routes>
    </Router>
  )
}