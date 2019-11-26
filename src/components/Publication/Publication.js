import React from 'react';
import Proppes from 'prop-types';
import abc from './Publication.module.css';

const Publication = ({ currentP, currentT }) => (
  <article className={abc.publication}>
    <h2>{currentT}</h2>
    <p>{currentP}</p>
  </article>
);

Publication.propTypes = {
  currentP: Proppes.string.isRequired,
  currentT: Proppes.string.isRequired,
}.isRequired;
export default Publication;
