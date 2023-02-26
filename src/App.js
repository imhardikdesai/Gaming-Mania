import './App.css';
import { GameGallery, NavBar } from './components/index'


function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container mt-3">
        <GameGallery />
      </div>
    </div>
  );
}

export default App;
