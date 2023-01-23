import React from 'react';

import Card from './Card';

const Average = props => {
  return (
    <Card title="Numbers Average" green>
      <div className="Average">
        <span>Results: <strong>8</strong></span>
      </div>
    </Card>
  );
}

export default Average;
