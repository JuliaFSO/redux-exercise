import React from 'react';
import { connect } from 'react-redux';

import Card from './Card';

const Average = props => {
  const { min, max } = props;
  return (
    <Card title="Numbers Average" green>
      <div className="Average">
        <span>Results: <strong>{(max + min) / 2}</strong></span>
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

export default connect(mapStateToProps)(Average);
