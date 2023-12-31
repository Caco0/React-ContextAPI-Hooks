import viteLogo from '../../../public/vite.svg';
import reactLogo from '../../assets/react.svg';
import { Button } from '../../components/button';
import { Heading } from '../../components/heading';
import { useCounterContext } from '../../context/CounterContexts';
import './App.css';

function App() {
  const [state, actions] = useCounterContext();

  const handleError = () => {
    actions
      .asyncError()
      .then((r) => console.log(r))
      .catch((e) => console.log(e.name, ':', e.message));
  };

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
          <Button onButtonClick={actions.decrease}>Decrease</Button>
          <Button onButtonClick={actions.reset}>Reset</Button>
          <Button onButtonClick={() => actions.setCounter({ counter: 10 })}>
            Set 10
          </Button>
          <Button onButtonClick={() => actions.setCounter({ counter: 100 })}>
            Set 100
          </Button>
          <Button
            disabled={state.loading}
            onButtonClick={actions.asyncIncrease}
          >
            Async Increase
          </Button>
          <Button disabled={state.loading} onButtonClick={handleError}>
            Async Error
          </Button>
        </div>
      </div>
    </>
  );
}

export default App;
