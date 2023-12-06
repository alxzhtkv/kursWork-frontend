// import { Router } from 'express';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import WelcomePage from './pages/welcome/WelcomePage';
import './index.css'
import RegistrationPage from './pages/registration/RegistrationPage';
import LoginPage from './pages/login/LoginPage';
import MainPage from './pages/main/MainPage';

const App: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = async () => {
    try {
      const response = await fetch('http://localhost:8000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, username, password }),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, username, password }),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Router>
      {/* <div className='app_wrapper'> */}
        <Routes>
          <Route path='/' element={<WelcomePage />} />
          <Route path ='/registration' element={<RegistrationPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/main' element={<MainPage/>}/>
        </Routes>
      {/* </div> */}
    </Router>
    // <div>
    //   <h1>Authentication Example</h1>
    //   <div>
    //     <label>Username:</label>
    //     <input
    //       type="text"
    //       value={username}
    //       onChange={(e) => setUsername(e.target.value)}
    //     />
    //   </div>
    //   <div>
    //     <label>email:</label>
    //     <input
    //       type="text"
    //       value={email}
    //       onChange={(e) => setEmail(e.target.value)}
    //     />
    //   </div>
    //   <div>
    //     <label>Password:</label>
    //     <input
    //       type="password"
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //     />
    //   </div>
    //   <button onClick={handleRegister}>Register</button>
    //   <button onClick={handleLogin}>Login</button>
    // </div>
  );
};

export default App;