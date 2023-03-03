
import './App.css';
import { useSelector, useDispatch } from "react-redux"

import { actions } from './store/index';

function App() {
  const cou = useSelector((state) => state.alpha.counter1)
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(actions.increment())
  }

  const decrement = () => {
    dispatch(actions.decrement())
  }
  const ADD_10 = () => {
    dispatch(actions.addBy(10))
  }

  return (
    <div className="App">
      <h1>Counter App</h1>
      <h2>{cou.length}</h2>

      <button onClick={increment}>INC</button>
      <button onClick={decrement}>DEC</button>
      <button onClick={ADD_10}>ADD BY 10</button>
    </div>
  );
}

export default App;
