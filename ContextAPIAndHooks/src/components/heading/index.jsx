import { useCounterContext } from '../../context/CounterContexts';

export const Heading = () => {
  const [state] = useCounterContext();
  return <h1>{state.counter} - React - Context API + Hooks</h1>; // JSX
};
