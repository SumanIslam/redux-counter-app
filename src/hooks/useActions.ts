import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { decrement, increment, set } from '../actions';

export const useActions = () => {
	const dispatch = useDispatch();
  const actions = useMemo(
		() =>
			bindActionCreators(
				{
					increment,
					decrement,
					set,
				},
				dispatch
			),
		[dispatch]
	);

	return actions;
};
