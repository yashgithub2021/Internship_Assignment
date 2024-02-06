import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Signup from './components/SignUp';
import Home from './components/Home';
import { Login } from './components/Login';
import UserState from './context/UserState';
;


function App() {
  return (
    <UserState>
      <BrowserRouter>
        {/* <Navbar></Navbar> */}
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/signup' element={<Signup />}></Route>
          <Route exact path='/login' element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </UserState>
  );
}

export default App;
