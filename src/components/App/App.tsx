import React from 'react';
import LandMarkList from '../LandMarkList';
import LandMarkView from '../LandMarkView';
import ReviewList from '../ReviewList';
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
        <LandMarkView/>
        <ReviewList />
      </main>
      
    </div>
  );
}

export default App;
