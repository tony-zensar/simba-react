import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Contracts, Dashboard } from './pages';
import './styles/global.scss';

function App() {
  return (
    <div className='App'>
      <Contracts />
      <BrowserRouter></BrowserRouter>
      <header className='App-header'></header>
    </div>
  );
}

export default App;
