import React, {Component} from 'react';
import Radium from 'radium';
import {connect} from 'react-redux';
import MediaQuery from 'react-responsive';
import Video from './Video';
import Headline from './Headline';
import SlideShow from './SlideShow';

import Styles, {base} from './Styles';

const Jumbotron = ({videos, poster, slides, headline, subheadline, load}) => {
  return (
    <div className='Jumbotron' style={[base]}>
      <div style={[Styles.tint]}>
        <SlideShow slides={slides} />
        <Headline headline={headline} subheadline={subheadline} load={load} />
      </div>
    </div>
  );
};

const mapStateToProps = ({Jumbotron}) => {
  return {
    videos: Jumbotron.get('videos').toJS(),
    poster: Jumbotron.get('poster'),
    slides: Jumbotron.get('slides').toJS(),
    headline: Jumbotron.get('headline'),
    subheadline: Jumbotron.get('subheadline')
  };
}
const mapDispatchToProps = (dispatch) => {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  Radium(
    Jumbotron
  )
);
