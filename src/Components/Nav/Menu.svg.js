import React, {Component} from 'react';
import Radium from 'radium';

const MenuSVG = ({style, onClick, color, onMouseOver, onMouseOut}) => {
  return (
    <div className='MenuSVG' style={style} onClick={onClick} onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
      <svg height="100%" width='100%' viewBox="0 0 18 12">
        <g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1">
          <g fill={color} id="Core" transform="translate(-87.000000, -342.000000)">
            <g id="menu" transform="translate(87.000000, 342.000000)">
              <path d="M0,12 L18,12 L18,10 L0,10 L0,12 L0,12 Z M0,7 L18,7 L18,5 L0,5 L0,7 L0,7 Z M0,0 L0,2 L18,2 L18,0 L0,0 L0,0 Z" id="Shape"/>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default
  Radium(
    MenuSVG
  );
