import React from 'react';
import Main from '@/components/Main';
import SideBar from '@/components/SideBar';

import classes from './App.scss';

const App = () => {
  return (
    <div className={classes.app}>
      <aside className={classes.sidebarWrapper}>
        <SideBar />
      </aside>
      <main className={classes.mainWrapper}>
        <Main />
      </main>
      
    </div>
  );
}

export default App;
