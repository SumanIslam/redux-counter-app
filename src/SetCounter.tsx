import { useDispatch} from 'react-redux';
import { set } from './actions';
import { useCounter } from './hooks/useCounter';

export const SetCounter = () => {
	const dispatch = useDispatch();

	const {count, setCount} = useCounter();
	
	return (
		<section className='controls'>
			<form
				onSubmit={(event) => {
					event.preventDefault();
					dispatch(set(count));
				}}
			>
				<label htmlFor='set-to'>Set Count</label>
				<input
					id='set-to'
					type='number'
					value={count}
					onChange={(e) => setCount(parseInt(e.target.value, 10))}
				/>
				<input type='submit' />
			</form>
		</section>
	);
};
