import React, {Component} from 'react';
import Radium from 'radium';
import {Motion, StaggeredMotion, spring, presets} from 'react-motion';
import {connect} from 'react-redux';
import Category from './Category';

import {base} from './Styles';

const Menu = ({open, LinkOveride, data, categoryOnHover, categoryToggle, toggleMenu}) => {
  return (
    <div className='Menu'>
      <Motion style={{
        transform: open ? spring(100, presets.gentle) : spring(0, presets.gentle)
      }}>
        {
          ({transform}) => (
            <div style={[base, {
              transform: `translate(${100 - transform}%, 0%)`
            }]}>
              <StaggeredMotion
                defaultStyles={data.map( () => ({transform: 100}))}
                styles={
                  (styles) => styles.map( (style, index) =>
                    ( index === 0 ?
                      {transform: open ? spring(0, presets.gentle) : spring(100, presets.gentle)} :
                      {transform: spring(styles[index-1].transform, presets.gentle) }
                    )
                  )
                }
              >
                {
                  (styles) => (
                    <div>
                      {
                        data.map(({name, link, open, border, hover, submenu}, index) => (
                          <Category
                            style={{
                              transform: `translate(${styles[index].transform}%, 0%)`
                            }}
                            toggleMenu={toggleMenu}
                            open={open}
                            name={name}
                            link={link}
                            border={border}
                            hover={hover}
                            key={index}
                            submenu={submenu}
                            index={index}
                            LinkOveride={LinkOveride}
                            onClick={categoryToggle(index)}
                            onMouseOver={categoryOnHover(index)}
                            onMouseOut={categoryOnHover(index)} />
                        ) )
                      }
                    </div>
                  )
                }
              </StaggeredMotion>
            </div>
          )
        }
      </Motion>
    </div>
  );
};

const mapStateToProps = ({Menu}) => {
  return {
    open: Menu.get('open'),
    data: Menu.get('data').toJS()
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    categoryOnHover(index){
      return () => dispatch({type: 'MENU_CATEGORY_HOVER', index: index});
    },
    categoryToggle(index){
      return () => dispatch({
        type: 'MENU_CATEGORY_TOGGLE',
        index: index
      });
    },
    toggleMenu(){
      dispatch({type: 'MENU_TOGGLE'})
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  Radium(
    Menu
  )
);
