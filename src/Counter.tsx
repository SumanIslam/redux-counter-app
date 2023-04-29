import { useSelector } from 'react-redux';
import { SetCounter } from './SetCounter';
import { useActions } from './hooks/useActions';
import { Store } from './types/count/types';

export const Counter = () => {
	const incident = 'Incident';
	const count = useSelector((state: Store) => state.count);

	const { increment, decrement, set } = useActions();

	return (
		<main className='Counter'>
			<h1>Days Since Last {incident}</h1>
			<p className='count'>{count}</p>
			<section className='controls'>
				<button onClick={() => increment()}>Increment</button>
				<button onClick={() => set(0)}>Reset</button>
				<button onClick={() => decrement()}>Decrement</button>
			</section>
			<SetCounter />
		</main>
	);
};

export default Counter;
