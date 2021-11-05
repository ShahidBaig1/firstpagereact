
import './App.css';
import Searchbar from './body/searchbar';
import Cards from './cards/card';
import Header from './header/header';
import Cats from './map/map.js';

function App() {
  return (
    <div className="App">
      <Header/>
      
      <div className="cads">
      <Cats />
      </div>
    </div>
  );
}

export default App;
