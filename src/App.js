import './App.css';
import {useDispatch, useSelector} from 'react-redux'
import {login} from "./redux/loginSlice"
import { useEffect,useState } from 'react';
import Header from './components/header/Header';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Profile from './pages/profile/Profile';

function App() {
 
  return (
     <HashRouter>
      <div className="App">
        
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
     </HashRouter>
  );
}

export default App;
