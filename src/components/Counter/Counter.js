import React from 'react';
import Proppes from 'prop-types';
import abc from './Counter.module.css';

const Counter = ({ propIndex, finalIndex }) => (
  <p className={abc.counter}>
    {propIndex}/{finalIndex}
  </p>
);

Counter.propTypes = {
  propIndex: Proppes.number.isRequired,
  finalIndex: Proppes.number.isRequired,
}.isRequired;
export default Counter;
