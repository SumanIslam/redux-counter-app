export interface Store {
	count: number;
}

export interface IncrementCountAction {
	type: 'INCREMENT';
}

export interface DecrementCountAction {
	type: 'DECREMENT';
}

export interface SetCountAction {
	type: 'SET';
  payload: number;
}

export type CountActions = IncrementCountAction | DecrementCountAction | SetCountAction;