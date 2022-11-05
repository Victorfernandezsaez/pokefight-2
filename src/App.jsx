import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Pokedex from './Pages/Pokedex'
import Profile from './Pages/Profile'
import About from './Pages/About'
import Error from './Pages/Error'



function App() {

  return (
   <Router>
    <nav>
      <Link to= "/">Pokedex</Link>
      <Link to="/about">About</Link>
      <Link to="/profile">Profile</Link>
    </nav>
    <Routes>
      <Route path= "/:id"element={<Pokedex/>} />
      <Route path= "/about/:username"element={<About/>} />
      <Route path= "/profile/"element={<Profile/>} />
      <Route path= "*"element={<Error/>} />


    </Routes>
   </Router>
  )
}

export default App
