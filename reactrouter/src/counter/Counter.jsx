import React from 'react';
import { useState } from 'react';

export const Counter = ({ initialValue = 0 }) => {
  const [value, setValue] = useState(initialValue);
  return (<>
    <button onClick={() => setValue(value => value - 1)} >decrease</button>
    <div style={{ width: '200px' }} >{value}</div>
    <button onClick={() => setValue(value => value + 1)}>increase</button>
  </>
  );
};
