import React from 'react';
import { connect } from 'react-redux';

import Card from './Card';

const Sum = props => {
  const { min, max } = props;
  return (
    <Card title="Numbers Sum" blue>
      <div className="Sum">
        <span>Results: <strong>{max + min}</strong></span>
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

export default connect(mapStateToProps)(Sum);
