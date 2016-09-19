import React, {Component} from 'react';
import Radium from 'radium';
import {connect} from 'react-redux';

import Styles from './Styles';

const Foot = ({copyright, information, facebook, twitter}) => {
  console.log(twitter);
  console.log(facebook);
  return (
    <div className='Foot' style={[Styles.base]}>
      <div className='Copyright' style={[Styles.copyright]}>
        {copyright}<br />{information}
      </div>
      <div className='SocialMedia' style={[Styles.socialMedia]}>
        <a href={facebook} target='_blank' style={[Styles.socialMedia.a]}>
          <i className='fa fa-facebook-f' />
        </a>
        <a href={twitter} target='_blank' style={[Styles.socialMedia.a]}>
          <i className='fa fa-twitter' />
        </a>
        {/*<a href={instagram} target='_blank' style={[Styles.socialMedia.a]}>
          <i className='fa fa-instagram' />
        </a>*/}
      </div>
      <div className='Developer' style={[Styles.developer]}>
        Website by <a href='http://www.purelisting.com' target='_blank'>PURELISTING</a>.
      </div>
    </div>
  );
};

const mapStateToProps = ({Foot}) => {
  return {
    copyright: Foot.get('copyright'),
    information: Foot.get('information'),
    facebook: Foot.get('facebook'),
    twitter: Foot.get('twitter'),
    instagram: Foot.get('instagram'),
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
    Foot
  )
);
