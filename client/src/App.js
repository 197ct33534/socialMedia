import Auth from 'pages/auth/Auth';
import Home from 'pages/home/Home';
import Profile from 'pages/profile/Profile';
import { useSelector } from 'react-redux';
import './App.scss';
import { Routes, Route, Navigate } from 'react-router-dom';
const App = () => {
  const user = useSelector((state) => state.authReducer.authData);
  return (
    <div className="App">
      <div className="blur" style={{ top: '36%', left: '-8rem' }}></div>
      <div className="blur" style={{ top: '-18%', right: '0' }}></div>
      <Routes>
        <Route path="/" element={user ? <Navigate to="home" /> : <Navigate to="/auth" />} />
        <Route path="/home" element={user ? <Home /> : <Navigate to="/auth" />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
      {/* <Home /> */}
      {/* <Profile /> */}
    </div>
  );
};

export default App;
