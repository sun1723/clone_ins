import React from 'react';
import Main from '@/components/Main';
import SideBar from '@/components/SideBar';

// import classes from './App.scss';

const App = () => {
  return (
    <div className="App">
      <aside>
        <SideBar />
      </aside>
      <main>
        <Main />
      </main>
      
    </div>
  );
}

export default App;
