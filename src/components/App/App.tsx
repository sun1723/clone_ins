import LandMarkList from '../LandMarkList';
import Main from '../Main';
import SearchBar from '../SearchBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <aside>
        <SearchBar/>
        <LandMarkList />
      </aside>
      <main>
        <Main />
      </main>
      
    </div>
  );
}

export default App;
