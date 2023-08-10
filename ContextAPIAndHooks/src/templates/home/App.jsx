import viteLogo from '../../../public/vite.svg';
import reactLogo from '../../assets/react.svg';
import { Button } from '../../components/button';
import { Heading } from '../../components/heading';
import { useCounterContext } from '../../context/CounterContexts';
import './App.css';

function App() {
  const [state, actions] = useCounterContext();
  console.log(state);
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
      <div className="card">
        <Heading />

        <div>
          <Button onButtonClick={actions.increase}>Increase</Button>
        </div>
      </div>
    </>
  );
}

export default App;
