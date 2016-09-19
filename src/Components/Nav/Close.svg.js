import React, {Component} from 'react';
import Radium from 'radium';

const MenuSVG = ({style, onClick, color, onMouseOver, onMouseOut}) => {
  return (
    <div className='MenuSVG' style={style} onClick={onClick} onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
      <svg height="100%" width='100%' viewBox="0 0 14 14">
        <g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1">
          <g fill={color} id="Core" transform="translate(-341.000000, -89.000000)">
            <g id="close" transform="translate(341.000000, 89.000000)">
              <path d="M14,1.4 L12.6,0 L7,5.6 L1.4,0 L0,1.4 L5.6,7 L0,12.6 L1.4,14 L7,8.4 L12.6,14 L14,12.6 L8.4,7 L14,1.4 Z" id="Shape"/>
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
