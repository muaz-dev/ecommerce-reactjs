import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment,decrement } from '../../features/cart/add-to-cart';
import { RootState } from '../../store';

function Test() {
    const count = useSelector((state: RootState) => state.addToCartReducer.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => dispatch(increment())}>Increment</button><br />
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </div>
  );
}

export default Test
