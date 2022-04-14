import './App.css';
import Navigation from './Components/Navigation/Navigation';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Homepage from './Pages/Homepage';
// import Signup from './Pages/Signup';
// import Signin from './Pages/Signin';
import SignupType from './Pages/SignupType';
import Signin from './Pages/forms/Signin';
import Signup from "./Pages/forms/Signup"
import Dashboard from './Pages/Dashboard'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Drawer from "./Components/Navigation/Drawer"

function App() {
  return (
    <div className="App">
      <div className='wrapper'>
      <Router>
        <Navigation />
        <Drawer />
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/signuptype' element={<SignupType/>}/>
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/Dashboard' element={<Dashboard/>}/>
        </Routes>
      </Router>
      </div>
    </div>
  );
}

export default App;
