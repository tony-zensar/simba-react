import React from "react"
import { Routes } from './routes/index';
import './styles/global.scss';

function App() {
  return (
    <div className="App" >
      <Routes />
      <smart-assistant></smart-assistant>
    </div>
  );
}

export default App;
