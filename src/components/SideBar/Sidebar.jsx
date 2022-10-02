import React from 'react';
import LandMarkList from '../LandMarkList';
import SearchBar from '../SearchBar';

const Sidebar = () => {

  return (
    <div>
        <SearchBar/>
        <LandMarkList />
    </div>
  )
}

export default Sidebar;