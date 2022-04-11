import './App.css';
import Navbar from './Components/Navigation/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Homepage from './Pages/Homepage';
import Signup from './Pages/Signup';
import Signin from './Pages/Signin'
import Candidate from './Pages/Candidate'
import Dashboard from './Pages/Dashboard'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/signup/candidate' element={<Candidate/>}/>
          <Route path='/Dashboard' element={<Dashboard/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
