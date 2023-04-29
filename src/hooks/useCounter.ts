import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Store } from '../types/count/types';
export const useCounter = () => {
	const countFromStore = useSelector((state: Store) => state.count);

	const [count, setCount] = useState(countFromStore);

	useEffect(() => {
		setCount(countFromStore);
	}, [countFromStore]);

  return {
    count,
    setCount
  }
};
