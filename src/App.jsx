import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { counterIncrement, counterReset } from './redux/actions/counter-action';
import Header from './components/Header';

function App() {
	const count = useSelector((state) => state.counter.count);

	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch(counterIncrement(1));
	}

  return (
    <div className="App">
			<Header />
      <div className="card">
        <button onClick={handleClick}>
          count is {count}
        </button>
				<button onClick={() => dispatch(counterReset())}>Reset</button>
      </div>
    </div>
  )
}

export default App
