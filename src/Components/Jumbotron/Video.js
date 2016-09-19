import React, {Component} from 'react';
import Radium from 'radium';
import {connect} from 'react-redux';

import Styles from './Styles';

const Video = ({videos, poster}) => {
  return (
    <video
        preload={true}
        loop={true}
        autoPlay={true}
        poster={poster}
        style={[Styles.videos]}
      >
        {
          videos.map((url, index)=>(
            <source src={url} key={index} />
          ))
        }
    </video>
  );
};

const mapStateToProps = (state) => {
  return {};
}
const mapDispatchToProps = (dispatch) => {
  return {};
}

export default Radium(
  Video
);
