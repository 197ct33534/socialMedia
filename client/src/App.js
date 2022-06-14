import Home from 'pages/home/Home';
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <div className="blur" style={{ top: '36%', left: '-8rem' }}></div>
      <div className="blur" style={{ top: '-18%', right: '0' }}></div>
      
      <Home />
    </div>
  );
};

export default App;
