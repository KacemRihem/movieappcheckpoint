import React from 'react';
import './App.css';
import Search from './Search';
import Movielist from './Movielist';
import AddMovie from './AddMovie'

function App() {
  return (
    <div className="App">
      <Search />
      <Movielist />
      <AddMovie />
    </div>
  );
}

export default App;
