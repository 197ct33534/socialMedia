import Auth from 'pages/auth/Auth';
import Home from 'pages/home/Home';
import Profile from 'pages/profile/Profile';
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <div className="blur" style={{ top: '36%', left: '-8rem' }}></div>
      <div className="blur" style={{ top: '-18%', right: '0' }}></div>

      <Home />
      {/* <Profile /> */}
      {/* <Auth /> */}
    </div>
  );
};

export default App;
