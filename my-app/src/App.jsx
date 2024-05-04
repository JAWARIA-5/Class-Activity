import React, { useState } from 'react';
import Navbar from './Navbar/navbar.jsx';
import ListView from './List/list.jsx';
import GridView from './Grid/grid.jsx';
import SearchBar from './SearchBar/search.jsx'
function App() {
  const [view, setView] = useState('list'); 

  return (
    <>
      <Navbar onViewChange={setView} />
      <SearchBar/>
      {view === 'List View' ? <ListView  /> : <GridView  />}
   
    </>
  );
}

export default App;
