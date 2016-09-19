import React, {Component} from 'react';
import Radium from 'radium';
import {StaggeredMotion, spring, presets} from 'react-motion';
import {connect} from 'react-redux';

import Styles from './Styles';

const Headline = ({headline, subheadline, load}) => {
  return (
    <StaggeredMotion
      defaultStyles={[
        {
          transform: 200,
          opacity: 0
        },
        {
          transform: 200,
          opacity: 0
        },
      ]}
      styles={ (styles) =>
        styles.map((_, i) => (
          i === 0 ?
          {
            transform: load ? spring(0, presets.noWobble) : spring(200, presets.noWobble),
            opacity: load ? spring(1, presets.noWobble) : spring(0, presets.noWobble)
          }:
          {
            transform: spring(styles[i-1].transform, {stiffness: 100, damping: 40}),
            opacity: spring(styles[i-1].opacity, presets.noWobble)
          }
        ))
      }
    >
      {
        (styles) => (
          <div style={[Styles.headline]}>
            <h1 style={[{
              transform: `translate(0%, ${styles[0].transform}%)`,
              opacity: styles[0].opacity,
              fontSize: '35px',
              lineHeight: '40px',
              '@media (min-width: 768px)':{
                fontSize: '60px',
                lineHeight: '70px',
              },
              '@media (min-width: 1024px)':{
                fontSize: '75px',
                lineHeight: '85px',
              }
            }]}>
              {headline}
            </h1>
            <h5 style={[{
              transform: `translate(0%, ${styles[1].transform}%)`,
              opacity: styles[1].opacity,
              fontSize: '14px',
              lineHeight: '20px',
              '@media (min-width: 768px)':{
                fontSize: '20px',
                lineHeight: '30px',
              }
            }]}>
              {subheadline}
            </h5>
          </div>
        )
      }
    </StaggeredMotion>
  );
};

const mapStateToProps = (state) => {
  return {};
}
const mapDispatchToProps = (dispatch) => {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  Radium(
    Headline
  )
);
