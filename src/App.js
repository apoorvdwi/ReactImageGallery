import React from 'react';
import './App.scss';
import SearchPhotos from './components/searchPhotos/searchPhotos';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="title">React Image Gallery </h1>
        <SearchPhotos />
      </div>
    </div>
  );
}
export default App;
