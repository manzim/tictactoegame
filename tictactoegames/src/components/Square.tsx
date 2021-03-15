import React from "react";

import './Game.css'

type Props = {
  value: string;
  onClick: () => void;
};
const Square: React.FC<Props> = props => {
  return (
    <button className="square sqr-btn " onClick={props.onClick}>
      {props.value}
    </button>
  );
};

export default Square;
