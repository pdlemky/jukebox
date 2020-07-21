import React from 'react';
import './App.css';

import Player from './components/player/player.component';
import Playlist from './components/playlist/playlist.component';

function App() {
  return (
    <div className="App">
      <Player />
      <Playlist />
    </div>
  );
}

export default App;
