import React, { Component } from 'react';
import Proppes from 'prop-types';
import abc from './Reader.module.css';
import Controls from '../Controls/Controls';
import Counter from '../Counter/Counter';
import Publication from '../Publication/Publication';

class Reader extends Component {
  static propTypes = {
    items: Proppes.arrayOf(
      Proppes.shape({
        id: Proppes.string.isRequired,
        title: Proppes.string.isRequired,
        text: Proppes.string.isRequired,
      }).isRequired,
    ).isRequired,
  };

  state = {
    index: 0,
    step: 1,
  };

  handleNext = () => {
    const { step } = this.state;
    this.setState(beforeState => ({
      index: beforeState.index + step,
    }));
  };

  handlePrev = () => {
    const { step } = this.state;
    this.setState(beforeState => ({
      index: beforeState.index - step,
    }));
  };

  render() {
    const { items } = this.props;
    const { index } = this.state;

    const activeNext = index + 1 === items.length;
    const activePrev = index === 0;
    return (
      <div className={abc.reader}>
        <Controls
          handleNext={this.handleNext}
          handlePrev={this.handlePrev}
          activeNext={activeNext}
          activePrev={activePrev}
        />
        <Counter propIndex={index + 1} finalIndex={items.length} />
        <Publication
          currentT={items[index].title}
          currentP={items[index].text}
        />
      </div>
    );
  }
}

export default Reader;
