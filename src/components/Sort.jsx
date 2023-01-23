import React from 'react';
import { connect } from 'react-redux';

import Card from './Card';

const Sort = props => {
  const { min, max } = props;
  return (
    <Card title="Numbers Sort" purple>
      <div className="Sort">
        <span>Results: <strong>{parseInt(Math.random() * (max - min + 1) + min)}</strong></span>
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

export default connect(mapStateToProps)(Sort);
