import React, { useReducer } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../redux/initialExample/counterActions';

export const Counter = () => {

  const { value } = useSelector(state => state);

  const dispach = useDispatch();

  const handleIncrease = () => {
    dispach(actions.increaseNumber())
  }

  return (<>

    {value}

    <Button size='sm' onClick={handleIncrease}  >
      Increase
    </Button>

    <Button size='sm' onClick={() => dispach(actions.decreaseNumber())}>
      decrease
    </Button>
    <Button size='sm' onClick={() => dispach(actions.resetNumber())}>
      reset
    </Button>
  </>
  );
};
