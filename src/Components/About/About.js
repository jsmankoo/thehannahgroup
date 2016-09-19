import React, {Component} from 'react';
import Radium from 'radium';
import {connect} from 'react-redux';
import marked from 'marked';

import Styles from './Styles';

const About = ({background, name, pic, markdown}) => {
  return (
    <div id='about' className='About' style={[Styles.base, {
      backgroundImage: `url('${background}')`
    }]}>
      <div style={[Styles.tint]}>
        <h2 style={[Styles.header]}>{name}</h2>
        <div style={[Styles.row]}>
          <img style={[Styles.img.mobile]} src={pic.mobile} />
          <img style={[Styles.img.tablet]} src={pic.tablet} />
          <div style={[Styles.markdown]}
            dangerouslySetInnerHTML={{__html: marked(markdown)}} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({About}) => {
  return {
    background: About.get('background'),
    name: About.get('name'),
    pic: About.get('pic').toJS(),
    markdown: About.get('markdown')
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
    About
  )
);
