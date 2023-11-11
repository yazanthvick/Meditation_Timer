import Navbar from './Navbar';
import Home from './Home';
import Timer from './Timer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
      <Timer />
    </div>
  );
}

export default App;
