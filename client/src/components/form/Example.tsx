import React from 'react';

interface ExampleProps {
  name: string;
  picture?: string;
  age: number;
  handleOnClick: () => void;
  handleOnClickParams: () => void;
  input: string;
  handleInput: (e: string) => void;
}

export const Example: React.FC<ExampleProps> = ({
  name,
  picture,
  age,
  handleOnClick,
  handleOnClickParams,
  input,
  handleInput,
}) => {
  return (
    <div>
      {name}
      {picture}
      {age}
      <input
        type='text'
        name='name'
        value={input}
        onChange={(e) => handleInput(e.currentTarget.value)}
      />
      <button onClick={handleOnClick}>CLICK ME!!</button>
      <button onClick={() => handleOnClickParams()}>CLICK ME!!</button>
    </div>
  );
};
