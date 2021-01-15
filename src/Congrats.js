import React from 'react';

// component for congratulations message when player guessed the word
const Congrats = (props) => {
  return props.success ? (
    <div data-test="component-congrats">
      <span data-test="congrats-message">Congrats!</span>
    </div>
  ) : (
    <div data-test="component-congrats"></div>
  );
};

export default Congrats;
