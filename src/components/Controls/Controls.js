import React from 'react';
import Proppes from 'prop-types';
import abc from './Controls.module.css';

const Controls = ({ handleNext, handlePrev, activeNext, activePrev }) => (
  <section className={abc.controls}>
    <button
      disabled={activePrev}
      onClick={handlePrev}
      type="button"
      className={activePrev ? abc.button_disabled : abc.button}
    >
      Назад
    </button>
    <button
      disabled={activeNext}
      onClick={handleNext}
      type="button"
      className={activeNext ? abc.button_disabled : abc.button}
    >
      Вперед
    </button>
  </section>
);

Controls.propTypes = {
  handleNext: Proppes.func.isRequired,
  handlePrev: Proppes.func.isRequired,
  activeNext: Proppes.bool.isRequired,
  activePrev: Proppes.bool.isRequired,
}.isRequired;
export default Controls;
