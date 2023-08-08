import viteLogo from '../../../public/vite.svg';
import reactLogo from '../../assets/react.svg';
import './App.css';

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React - Context API + Hooks</h1>
      <div className="card">
        <h2>Olá</h2>
      </div>
    </>
  );
}

export default App;