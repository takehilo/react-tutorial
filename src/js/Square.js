import React from 'react';

function Square(props) {
  return (
    <button className="square" onClick={() => props.onClick()}>
      {props.value}
    </button>
  );
}

Square.propTypes = {
  value: React.PropTypes.string,
  onClick: React.PropTypes.func,
};

export default Square;
