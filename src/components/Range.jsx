import './Range.css';
import React from 'react';
import { connect } from 'react-redux';

import Card from './Card';
import { changeMin, changeMax } from '../store/actions/numbers';

const Range = props => {
  const { min, max } = props;
  return (
    <Card title="Numbers Range" red>
      <div className="Range">
        <span>
          <strong>Min</strong>
          <input type="number" value={min} onChange={e => props.changeMin(+e.target.value)} />
          <strong>Max</strong>
          <input type="number" value={max} onChange={e => props.changeMax(+e.target.value)}/>
        </span>
      </div>
    </Card>
  );
}

function mapStateToProps(state) {
  return {
    min: state.numbers.min,
    max: state.numbers.max
  }
}

function mapDispatchToProps(dispatch){
  return {
    changeMin(newNumber) {
      const action = changeMin(newNumber);
      dispatch(action);
    },
    changeMax(newNumber) {
      const action = changeMax(newNumber);
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Range);
