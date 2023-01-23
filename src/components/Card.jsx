import './Card.css';
import React from 'react';

function getColor(props) {
  if(props.blue) return 'Blue';
  if(props.green) return 'Green';
  if(props.purple) return 'Purple';
  if(props.red) return 'Red';
  return '';
}

const Card = props => {
  return (
    <div className={`Card ${getColor(props)}`}>
      <div className='Header'>
        <span className='Title'>{props.title}</span>
      </div>
      <div className='Content'>{props.children}</div>
    </div>
  )
}

export default Card;
