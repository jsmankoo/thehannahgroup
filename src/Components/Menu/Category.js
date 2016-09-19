import React, {Component} from 'react';
import {Motion, spring, presets} from 'react-motion';
import Radium from 'radium';
import Color from 'color';
import Submenu from './Submenu';

import {colors} from '../../Styles';
import Styles, {category} from './Styles';

const Category = ({name, LinkOveride, open ,hover, onMouseOver, onMouseOut, link, border, submenu, index, style, toggleMenu, ...rest}) => {
  return (
    <div className='Category' style={[category, style]} {...rest}>
      <div style={[(!hover && border) && Styles.border]}/>
      <Motion style={{
        background: hover ? 0 : 1,
        color: hover ? spring(0, presets.noWobble) : spring(1, presets.noWobble),
        letterSpacing: hover ? spring(6, presets.noWobble) : spring(3, presets.noWobble)
      }}>
        {
          ({background, color, letterSpacing}) => (
            <a
              onMouseOut={onMouseOut}
              onMouseOver={onMouseOver}
              className='H3'
              onClick={link && toggleMenu}
              href={link}
              style={[category.a, {
                backgroundColor: Color(colors.white).clearer(background).rgbString(),
                color: Color(colors.red).lighten(color).rgbString(),
                letterSpacing: `${letterSpacing}px`
              }]}
            >
              {name}
              {
                submenu && <Motion style={{
                  rotate: open ? spring(180, presets.noWobble) : spring(0, presets.noWobble)
                }}>
                  {
                    ({rotate}) => (
                      <i className='fa fa-angle-down' style={[category.i, {
                        transform: `translate(0%, -50%) rotate(${rotate}deg)`
                      }]}/>
                    )
                  }
                </Motion>
              }
            </a>
          )
        }
      </Motion>
      <Submenu LinkOveride={LinkOveride} data={submenu} category={index} open={open} toggleMenu={toggleMenu} />
    </div>
  );
};

export default Radium(
  Category
);
