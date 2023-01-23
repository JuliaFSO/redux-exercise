import React from 'react';

import Card from './Card';

const Sum = props => {
  return (
    <Card title="Numbers Sum" blue>
      <div className="Sum">
        <span>Results: <strong>12</strong></span>
      </div>
    </Card>
  );
}

export default Sum;
