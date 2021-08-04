import './App.css';
import { Header } from './components/Header';
import { Toast } from './components/Toastify';
import { Routes } from './routes';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header />
      <Toast />
      <Routes />
  </header>
    </div>
  );
}

export default App;
