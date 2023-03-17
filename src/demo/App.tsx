import React from 'react';
import './App.css';
//setup canvas
import { Stage, Layer} from 'react-konva';

import Dot from './Dot';
import Canvas from './Canvas';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Canvas/>
      </header>
    </div>

  );
}

export default App;
